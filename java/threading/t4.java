class First extends Thread{
    public void run(){
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
class Second extends Thread{
    public void run(){
       try{ 
        for(int i=1; i<=5; i++){
          System.out.println(Thread.currentThread().getName());
          Thread.sleep(1300);
        }
       }
       catch(Exception e){
        e.printStackTrace();
       } 
    }
}
class TestMain{
    public static void main(String args[]){
       First t1 = new First();
       Second t2 = new Second();
       
       t1.setName("Thread - T1 ");
       t2.setName("Thread - T2 ");
       
       t1.setPriority(Thread.MAX_PRIORITY); // 1 to 10 MAX_PRIORITY, NORM_PRIORITY, MIN_PRIORITY
       t2.setPriority(Thread.MIN_PRIORITY);

       t1.start(); // run()
       t2.start(); // run()
    }
}