class TestMain{
    public static void main(String args[]){
      int x = ++5;
      /*
         x =  ++5
         5 = 5 + 1
         5 = 6 : Error
       */
      System.out.println(x);
    }
}