/*
  Multithreading :-

  Multitasking :- Executing multiple simultaneously.
   a. Process Based MT :-
      Executing multiple task simultaneosuly , where each task is sperate
      independent process.
   b. Thread Based MT :- Executing multiple simultaneously, where each task
      is sperate independent part of same program.
   
   Thread :- Part of process[sub-process|Belongs to process]
   Thread is a light weight process.
   Thread is sperate flow of execution.
 -------------------------------------------------------------
 2  ways to implement multi-threading
  1. By extending Thread Class
  2. By implementing Runnable Interface  
 */
class First extends Thread{
    public void run(){
      for(int i=1; i<=5; i++){
       try{ 
        System.out.println("Cheeku");
        Thread.sleep(2200);
       }
       catch(Exception e){
        e.printStackTrace();
       }
      }  
    }
}
class Second extends Thread{
    public void run(){
      for(int i=1; i<=5; i++){
       try{ 
        System.out.println("Peeku");
        Thread.sleep(2200);
       }
       catch(Exception e){
        e.printStackTrace();
       }
      }  
    }
}
class TestMain{
    public static void main(String args[]){
        First t1 = new First();
        Second t2 = new Second();

        t1.start();
        t2.start();
    }
}


















