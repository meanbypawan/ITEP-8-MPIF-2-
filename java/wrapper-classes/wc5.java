class TestMain{
    public static void main(String args[]){

        System.out.println(true == true); // true
        System.out.println(true == false); // false
        //System.out.println(true == 1); // Incomparable boolean and int
        System.out.println((int)20.5); // 20 
        //System.out.println((int)true);
        boolean x = true;
        String s = ""+x;
        System.out.println(s);
    }
}