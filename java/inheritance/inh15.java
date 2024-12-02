interface I{
    void m1();
}
class TestMain{
    public static void main(String args[]){
        I obj = ()->System.out.println("GM....");
        I obj1 = ()->System.out.println("GE.....");
        I obj2 = ()->System.out.println("GN.....");

        obj.m1();
        obj1.m1();
        obj2.m1();
    }
}