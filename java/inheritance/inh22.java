interface I{
    void m1();
    interface I2{
        void m2();
    }
}
interface I3 extends I{}
class TestMain{
    public static void main(String args[]){
        I.I2 obj = ()->System.out.println("m2-executed....");
        obj.m2();
    }
}