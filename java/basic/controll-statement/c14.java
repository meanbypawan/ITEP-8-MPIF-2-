import java.util.Scanner;
class TestMain{
    public static void main(String args[]){
       Scanner sc = new Scanner(System.in);
       System.out.println("Enter an integer number...");
       int n = sc.nextInt();
       int i=2;
       while(i <= n/2){
         if(n%i==0){
           break;
         }  
         i++;
       }
       if( i > n/2 && n > 1)
         System.out.println("Prime");
       else
         System.out.println("Not prime");  

    }
}