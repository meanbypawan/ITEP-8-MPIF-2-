/*
  public class Exception extends Throwable{
    private String msg;
    public Exception(String msg){
        this.msg = msg;
    }
  }
 */
import java.util.Scanner;
class VoterException extends Exception{
  public VoterException(){
    super("Invalid Voter | you are less then 18");
  }
}
class TestMain{
    public static void main(String args[]){
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter Age");
      int age = sc.nextInt();
      try{
       if(age < 18)
         throw new VoterException();
       else
         System.out.println("You can vote...");  
      }
      catch(VoterException e){
        e.printStackTrace();
      }
    }
}








