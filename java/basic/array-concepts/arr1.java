import java.util.Scanner;
class TestMain{
    public static void main(String args[]){
       Scanner sc = new Scanner(System.in);
       
       System.out.println("How many element you want to store");
       int n = sc.nextInt();

       int arr[] = new int[n];
       int sum = 0;
       System.out.println("Enter "+n+ "element one by one");
       for(int i=0; i<n; i++){
         arr[i] = sc.nextInt();
         sum = sum + arr[i];
       }
       System.out.println("Sum  : "+sum);
    }
}