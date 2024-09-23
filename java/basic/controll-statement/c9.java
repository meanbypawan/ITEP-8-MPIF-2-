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

      if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
        System.out.println("Vowel...");
      else
        System.out.println("Not vowel...");     
    }
}