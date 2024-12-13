class Task{
  synchronized public void m1(){
        try{
         System.out.println(Thread.currentThread().getName()+" got a lock and producing data..");
   
         for(int i=1; i<=5; i++){
            System.out.println(Thread.currentThread().getName()+" producting data");
            Thread.sleep(3000);
          }
          notify();
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }

    synchronized public void m2(){
        try{
          System.out.println(Thread.currentThread().getName()+"  got a lock");
          System.out.println(Thread.currentThread().getName()+" released lock");
          wait();
          System.out.println(Thread.currentThread().getName()+" got a lock again and executing..");  
          for(int i=1; i<=5; i++){
            System.out.println(Thread.currentThread().getName()+" consuming data");
            Thread.sleep(2000);
          }
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
}
class Consumer extends Thread{
    private Task task;
    public Consumer(Task task){
        this.task = task;
    }
    public void run(){
        task.m2();
    }
}
class Producer extends Thread{
    private Task task;
    public Producer(Task task){
        this.task = task;
    }
    public void run(){
        task.m1();
    }
}
class TestMain{
    public static void main(String args[]) throws Exception{
      Task task = new Task();
      Consumer c1 = new Consumer(task);
      Producer p = new Producer(task);

      c1.setName("Consumer ");
      p.setName("Producer ");

      c1.start();
      c1.join(5000);
      p.start();
    }
}