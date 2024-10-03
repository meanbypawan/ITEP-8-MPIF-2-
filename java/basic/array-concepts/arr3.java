import java.util.Scanner;
class TestMain{
    public static void main(String args[]){
        int arr[] = {10,20,30,40,55,23,35,69,98,34,54,21,22,90,98,99};
        Scanner sc = new Scanner(System.in);
        int i;
        
        for(int ele : arr)
          System.out.println(ele);

        System.out.println("Enter searching element");
        int element = sc.nextInt();

        for(i=0; i<arr.length; i++)
            if(arr[i] == element)
                break;
            
        
        if(i == arr.length){
            System.out.println("Element Not Found...");
        }
        else
          System.out.println("Element found at "+(i+1));
    }
}