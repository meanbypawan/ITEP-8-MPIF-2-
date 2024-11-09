class TestString{
    private String data;
    public TestString(String data){
        this.data = data;
    }
    public String toString(){
        return data;
    }
}
class TestMain{
    public static void main(String args[]){
        String s1 = new String("hello");
        System.out.println(s1);

        TestString ts1 = new TestString("world");
        System.out.println(ts1); // ts1.toString()
    }
}