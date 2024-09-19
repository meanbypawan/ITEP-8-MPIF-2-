// ... var-arg
class TestMain{
    public static void main(String... args){
        System.out.println(true && true); // true
        System.out.println(true && false); // false
        System.out.println(false && false); // false
        //System.out.println(200 && -100); // error
        System.out.println(!true); // false
        System.out.println(!/*
   Logical Operator:-
     a. && (AND)
     b. || (OR)

     A          B       A && B
    (a>b)      (c<d)   (a>b)&&(c<d)    (a>b) || (c<d)
     true       false   false            true
     false      true    false            true   
     true       true    true             true
     false      false   false            false   

 */
class TestMain{
    public static void main(String args[]){
      int a,b,c,d;
      boolean x;
      a = 10;
      b = 20;
      c = 30;
      d = 40;
      x = (a < b) | (++c<d);
      
      System.out.println(a);
      System.out.println(b);
      System.out.println(c);
      System.out.println(d);
      System.out.println(x);
      
    }
}(20>10)); // false
    }
}