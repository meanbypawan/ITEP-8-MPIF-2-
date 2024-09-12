class A{
    public static void main(String args[]){
        // -128 to +127
        byte a = 127;
        a = (byte)(a + 3);
        System.out.println(a);
    }
}