/*
        0,1,2,3,4,5,6
        ---------------
  arr = 3,10,5,2,8,7,6

  arr[0] = 3

 */
class TestMain{
    public static void main(String args[]){
        int arr[] = {10,20,10,55,55,69,20};
        for(int i=0; i<arr.length-1; i++){
            for(int j=i+1; j<arr.length; j++){
                if(arr[i] > arr[j]){
                    int temp;
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        System.out.println("Sorted Array..");
        for(int element : arr)
          System.out.println(element);
    }
}









