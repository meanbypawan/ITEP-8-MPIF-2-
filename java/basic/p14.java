
class TestMain{
    public static void main(String args[]){
       int x=5;
       boolean y = ++x > 5;
       /*
          y = ++x > 5
          x =  x + 1
          y = x > 5
        */
       System.out.println(x);
       System.out.println(y);
    }
}