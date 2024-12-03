/*
  throw :- It is used to throw the Exception explicity...
  throws :-
    It is used declare the exception in a method or in a constructor.
    Throws propogate the the exception to the calling method.
  -------------------------------------------------------------------------
  Types of Exception :-
    a. Checked Exception
        aa. Partially Checked
        bb. Fully Checked [IOException<--FileNotFoundException]
    b. Unchecked Exception  
 */
import java.util.Scanner;
class IBE extends Exception{
    public IBE(){
        super("Insufficient Balance Exception");
    }
}
class ICICI{
    private int bal = 10000;
    public ICICI(int bal){
        this.bal = bal;
    }
    public ICICI(){}
    public void withdrawal(int amount) throws IBE{
        if(amount > bal)
          throw new IBE();
        else
          System.out.println("Withdrawal success...");  
    }
}
class TestMain{
   public static void main(String args[]) throws IBE{
    ICICI obj = new ICICI(50000);
    try{
      obj.withdrawal(51000); 
    }
    catch(Exception e){
        e.printStackTrace();
    }
   }
}