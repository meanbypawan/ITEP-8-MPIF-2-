interface I{
    void m1();
    default void m2(){
        System.out.println("m2()-executed...");
    }
}
class Test implements I{
    public void m1(){
        System.out.println("Test-m1()executed...");
    }
}
class TestMain{
    public static void main(String args[]){
        I obj = new Test();
        obj.m1();
        obj.m2();
    }
}