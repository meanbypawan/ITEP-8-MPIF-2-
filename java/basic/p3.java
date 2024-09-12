/*
    -128 to + 127 ----> byte -----> 1-byte
    -32768 to + 32767 --> short---> 2-byte
    -2147483648 to 2147483647--> int ---> 4-byte
    ---------------------------> long --> 8-byte

 */
class TestMain{
    public static void main(String args[]){
        short x = 120;
        x = (short)(x + 300);
        System.out.println(x); // 420

    }
}