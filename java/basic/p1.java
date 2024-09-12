/*
    p1.java -----> Compiler ---- > Byte code [.class]
                                   TestMain.class
    
    Java Application :-
      java-classes
      java-interfaces
      enum
      inner classes
      annonymous inner classes
 
 */
class TestMain{
    public static void main(String args[]){
        byte a,b,c;
        a = 20;
        b = 10;
        c = (byte)(a + b);
        System.out.println("Result : "+c);
    }
}