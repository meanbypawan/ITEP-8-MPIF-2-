import java.util.Scanner;
/*
   + ==> Addition of two number
   - ==> Subtraction of two
   *===>
   /===>
  Loop :-
 */
class TestMain{
    public static void main(String args[]){
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter + for addition..");
      System.out.println("Enter - for subtraction..");
      System.out.println("Enter * for multiplication...");
      System.out.println("Enter / for divistion...");
      System.out.println("Enter >|< for finding maximum....");

      System.out.println("Enter your choice...");
      char ch = sc.next().charAt(0);
      int a,b; 
      if(ch == '+' || ch == '-' || ch == '*' || ch == '/' || ch == '>' || ch == '<'){
        System.out.println("Enter 2 number..");
        a = sc.nextInt();
        b = sc.nextInt();
        switch(ch){
            case '+':  System.out.println("Addition : "+(a+b));
                        break;
            case '-':   System.out.println("Subtraction : "+(a-b));
                        break;                       
            case '/':   System.out.println("Division : "+(a/b));
                        break;            
            case '*':   System.out.println("Mulitplication : "+(a*b));
                        break;
            case '>':
            case '<':   if(a > b)
                        System.out.println(a+" > "+b);
                        else if(a == b)
                        System.out.println(a+" == "+b);
                        else
                        System.out.println(a+" < "+b);
                        break;
        }  
      }
      else
        System.out.println("Invalid choice...");     
    }
}