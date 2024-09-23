import java.util.Scanner;
class TestMain{
    public static void main(String args[]){
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter a integer value b/w 1 to 5");
      int n = sc.nextInt();
      int a = 2, b = 1;
      // 2 + 1 ==> Compilte Time Operation/ Constant expression
      // a + b ==> Runtime Operation / Variable Expression
      // 3
      switch(n){
        case 1: System.out.println("One");break;
        case 2: System.out.println("Two");break;
        case 2+1: System.out.println("Three");break;
        case 4-1: System.out.println("Four");break;
        case 5: System.out.println("Five");break;
        default: System.out.println("Invalid value...");
      }
    }
}