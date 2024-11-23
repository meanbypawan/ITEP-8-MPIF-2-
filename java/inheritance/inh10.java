/*
   inteface[1.7] :-
   Why  :- giving the proposal[providing guide line]
           To maintain the standard.

   What :- It is complete collection of abstract method.
   How  :-
 */
interface I{
  void m1();
  void m2();
}
class A implements I{
   public void m1(){
    System.out.println("m1()-executed...");
   }
   public void m2(){
    System.out.println("m2()-executed....");
   }
}
class TestMain{
    public static void main(String args[]){
      I obj = new A();
      obj.m1();
      obj.m2();
    }
}




