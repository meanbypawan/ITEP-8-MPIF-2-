class A{
    int x = 200;
    class B{
        public void m1(){
            System.out.println("B ka m1...."+x);
        }
    }
}
class TestMain{
    public static void main(String args[]){
        A.B ref =  new A().new B();
        ref.m1();
    }
}