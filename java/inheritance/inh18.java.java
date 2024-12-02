class A{
    static class B{
        public void m1(){
            System.out.println("B ka m1....");
        }
    }
}
class TestMain{
    public static void main(String args[]){
        A.B ref =  new A.B();
        ref.m1();
    }
}