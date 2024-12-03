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
    public void withdrawal(int amount){
       try{ 
        if(amount > bal)
          throw new IBE();
        else
          System.out.println("Withdrawal success...");  
       }
       catch(Exception e){
         e.printStackTrace();
       }
    }
}
class TestMain{
   public static void main(String args[]){
    Scanner sc = new Scanner(System.in);   
    ICICI obj = new ICICI(50000); // obj ; {bal : 50000}
    System.out.println("Enter amount...");
    int amount = sc.nextInt();
    obj.withdrawal(amount);
    System.out.println("Thanks for visit");
   }
}