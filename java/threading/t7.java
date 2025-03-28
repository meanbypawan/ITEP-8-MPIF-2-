class Task{
    public void m1(){
        try{
          for(int i=1; i<=5; i++){
            System.out.println(Thread.currentThread().getName());
            Thread.sleep(1000);
          }
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
}
class First extends Thread{
   Task task;
   public First(Task task){
     this.task = task;
   } 
   public void run(){
     task.m1();
   }
}
class Second extends Thread{
  Task task;
  public Second(Task task){
    this.task = task;
  }
  public void run(){
    task.m1();
  }
}
class TestMain{
    public static void main(String ar[]){
        Task task = new Task();
        First t1 = new First(task);
        Second t2 = new Second(task);
        t1.setName("First Thread");
        t2.setName("Second Thread");

        t1.start();
        t2.start();
    }
}
