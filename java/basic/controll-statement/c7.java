/*
  WAP to enter an integer number b/w 1 to 5 and print that
  number in character formate.
  1 => One
  2 => Two
  :
  5 => Five
 */
import java.util.Scanner;
class TestMain{
    public static void main(String ars[]){
       Scanner sc = new Scanner(System.in);
       System.out.println("Enter an integer number b/w (1 to 5)...");
       int n = sc.nextInt();
       
       if(n == 1)
         System.out.println("One");
       else if(n == 2)
         System.out.println("Two");
       else if(n == 3)
         System.out.println("Three");
       else if(n == 4)
         System.out.println("Four");
       else if(n == 5)
         System.out.println("Five");        
    }
}









