import java.util.Scanner;
class TestMain{
    public static void main(String args[]){
        int arr[] = {10,20,30,40,50,60,70,80,90,100};
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter searching element...");
        int element = sc.nextInt();
        int low,high,mid;
        low = 0;
        high = arr.length - 1;
        while(low <= high){
            mid = (low+high)/2;
            if(element == arr[mid])
              break;
            else if(element > arr[mid])
                  low = mid+1;
                 else
                  high = mid - 1;   
        }
        if(low <= high)
         System.out.println("Element Found...");
        else
         System.out.println("Element Not Found...."); 
    }
}




