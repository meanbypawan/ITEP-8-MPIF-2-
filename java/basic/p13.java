/*
   >, <, >=, <=, ==, !=
   20 > 10 : true
   20 < 10 : false
   20 == 10: false
   20 !=10 : true
 */
class TestMain{
    public static void main(String arg[]){
       int a,b,c,d;
       a = 10;
       b = 10;
       c = 10;
       d = 10;
       boolean x = (a == b) == (c == d);
       /*
          x =  a == b == c == d;
               a == b
               10 == 10
                  true == c
                  true == 10
                     error  
        */
       System.out.println(x);
    }
}





