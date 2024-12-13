class First implements Runnable{
    public void run(){
        try{
           for(int i=1; i<=5; i++){
              System.out.println("First Thread....");
              Thread.sleep(2000);
           }
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
}
class Second implements Runnable{
    public void run(){
        try{
           for(int i=1; i<=5; i++){
              System.out.println("Second Thread....");
              Thread.sleep(2600);
           }
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
}
class TestMain{
    public static void main(String args[]){
      Runnable r1 = new First();
      Runnable r2 = new Second();
      
      Thread t1 = new Thread(r1);
      Thread t2 = new Thread(r2);
      
      t1.start(); // run()
      t2.start();
    }
}







