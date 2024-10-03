import java.util.Scanner;
class TestMain{
    public static void main(String args[]){
      Scanner sc = new Scanner(System.in);
      System.out.println("Enter size of array");
      int n = sc.nextInt();
      int arr[] = new int[n+1];
      System.out.println("Enter "+n+" element in array");
      for(int i=0; i<n; i++){
        arr[i] = sc.nextInt(); 
      }
      System.out.println("Enter new element");
      int element = sc.nextInt();

      System.out.println("Enter position");
      int pos = sc.nextInt();
      if(pos > n){
        System.out.println("Invalid position...");
      }
      else{
        int i;
        for(i=n-1; i>=(pos-1); i--)
          arr[i+1] = arr[i];
        arr[i+1] = element;  
      
        System.out.println("After insert...");
        for(int item : arr)
          System.out.println(item);
      }
      
    }
}



