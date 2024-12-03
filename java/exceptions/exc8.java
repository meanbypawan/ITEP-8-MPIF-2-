class Test{
    public int m1(){
      try{
        /*
          --
         */
        //int c = 10/0;
        //return 100;
      }
      catch(Exception e){
        e.printStackTrace();
        //return 200;
      }
      finally{
        //return 300;
      }
      return 400;
    }
}
class TestMain{
    public static void main(String args[]){
        Test obj = new Test();
        int x = obj.m1();   
        System.out.println(x);
    }
}