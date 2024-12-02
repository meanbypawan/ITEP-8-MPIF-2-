class A{
    class B{
        public void m1(){
            System.out.println("B ka m1....");
        }
    }
}
class TestMain{
    public static void main(String args[]){
        A obj = new A();
        A.B ref =  obj.new B();
        ref.m1();
    }
}