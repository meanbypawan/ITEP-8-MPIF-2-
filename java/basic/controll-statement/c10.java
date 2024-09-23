/*
  WAP to enter a character/letter from user and check 
  whether it vowel or not.
  ch = ['a','e','i','o','u']
 */
import java.util.Scanner;
class TestMain{
    public static void main(String args[]){
      Scanner sc = new Scanner(System.in);
    
      System.out.println("Enter a letter");
      char ch = sc.next().charAt(0);

      switch(ch){
         case 'a' : 
         case 'e' : 
         case 'i' : 
         case 'o' : 
         case 'u' : System.out.println("Vowel");break;
         default : System.out.println("Not vowel...");
      }
    }
}




