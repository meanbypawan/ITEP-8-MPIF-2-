import java.util.Scanner;
/*
  W.A.P to enter the age of two person and findout
  who is older.
 */
class TestMain{
    public static void main(String arg[]){
      Scanner sc = new Scanner(System.in);

      System.out.println("Enter the age of cheeku");
      int cheekuAge = sc.nextInt(); 
    
      System.out.println("Enter the age of peeku");
      int peekuAge = sc.nextInt();

      if(cheekuAge > peekuAge)
        System.out.println("Cheeku is older");
      else
        System.out.println("Peeku is older");       
    }
}