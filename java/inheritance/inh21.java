class A{
    public void m1(){
        System.out.println("A ka m1()");
    }
    static class B{
        public void m2(){
            System.out.println("Inner class B ka m2()");
        }
    }
}

class Child extends A.B{

}
class TestMain{
    public static void main(String ars[]){
       Child obj = new Child();
       obj.m2();
    }
}




