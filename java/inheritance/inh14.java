interface I{
    public static final int x = 200; // public static final
    void m1();
    void m2();
    static void wish(){
        System.out.println("GM....");
    }
}
class TestMain{
    public static void main(String args[]){
     I.wish();
     System.out.println(I.x);
    }
}