class A{
    public void m1(){
        System.out.println("A-m1()");
    }
}
class B extends A{
    public void m2(){
        System.out.println("B-m2()");
    }
}
class C extends B{
    public void m3(){
        System.out.println("C-m2()");
    }
}
// A<--B<---C
// A [m1()]
// B [m1(),m2()]
// C [m1(),m2(),m3()]
class TestMain{
    public static void main(String args[]){
      A obj1 = new C(); // ---> obj.m1()

      B obj2 = new C(); // ---> obj.m1(); obj.m2();

      C obj3 = new C(); // ---> obj.m1(), obj.m2(), obj.m3()
    }
}








