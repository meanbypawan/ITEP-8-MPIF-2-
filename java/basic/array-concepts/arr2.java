/*
  for-each

  for(datatype var_name : arr_name){

  }
 */
class TestMain{
    public static void main(String args[]){
        //           0, 1, 2, 3, 4, 5, 6
        int arr[] = {10,20,30,40,50,15,25};
        int esum = 0, osum = 0;
        for(int element : arr){
          System.out.println(element);  
          if(element %2 == 0)
            esum = esum + element;
          else
            osum = osum + element;
        }
        System.out.println("Even Element Sum : "+esum);
        System.out.println("Odd Element Sum : "+osum);
    }
}





