class Task{
   synchronized public void m1(){
        try{
          for(int i=1; i<=5; i++){
            System.out.println(Thread.currentThread().getName()+" in m1()");
            Thread.sleep(3000);
          }
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
    synchronized public void m2(){
        try{
          for(int i=1; i<=5; i++){
            System.out.println(Thread.currentThread().getName()+" in m2()");
            Thread.sleep(2300);
          }
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
    public void m3(){
        try{
          for(int i=1; i<=5; i++){
            System.out.println(Thread.currentThread().getName()+" in m3()");
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
class Second extends Thread{
    private Task task;
    public Second(Task task){
        this.task = task;
    }
    public void run(){
        task.m2();
    }
}
class Third extends Thread{
    private Task task;
    public Third(Task task){
        this.task = task;
    }
    public void run(){
        task.m3();
    }
}
class TestMain{
    public static void main(String args[]){
        Task task = new Task();
        First t1 = new First(task);
        Second t2 = new Second(task);
        Third t3 = new Third(task);
        t1.setName("First Thread.. ");
        t2.setName("Second Thread.. ");
        t3.setName("Third Thread.. ");
        t1.start();
        t2.start();
        t3.start();
    }
}