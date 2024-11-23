/*
   Overriding :-
     1. Parameter must be same [Number of Para, Types of Parameter]
   
   Can we change the access modifier while overriding the method ?  
     private, <default>, protected, public
   Ans :- Yes, we can change the access modifier while overriding
   the method but access modifer must be equal or higher then parent
   class method access modifier.

   private
   <default>
   protected
   public

   Weaker Access ---> private
   Higher Access ---> public

   Tight Security---> private
   Less Security ---> public  
   
   Can we change the return type of the method while Overriding ?
   Ans: Yes , we can change the return type but in co-varient case only.
   
 */
class A{
   void m1(){
    System.out.println("A-m1()");
   }
}
class B extends A{
    public void m1(){
      System.out.println("B-m1()");
    }
}
class TestMain{
    public static void main(String args[]){
        A obj = new B();
        obj.m1();
    }
}









