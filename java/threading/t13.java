class Task{
   public void m1(){
        try{
          
          synchronized(this){
            for(int i=1; i<=5; i++){
              System.out.println(Thread.currentThread().getName()+" in synchronized block");
              Thread.sleep(2000);
            }  
          }
          for(int i=1; i<=5; i++){
            System.out.println(Thread.currentThread().getName()+" outside block");
            Thread.sleep(6000);
          }
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
}
class First extends Thread{
    private Task task;
    public First(Task task){
        this.task = task;
    }
    public void run(){
        task.m1();
    }
}
class TestMain{
    public static void main(String args[]){
      Task task = new Task();
      First t1 = new First(task);
      First t2 = new First(task);
      t1.setName("First Thread...");
      t2.setName("Second Thread...");

      t1.start();
      t2.start();
    }
}