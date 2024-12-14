class TestMain{
    public static void main(String args[]){
        String s = "123.5f";
        Float x = Float.parseFloat(s);
        System.out.println(x);

        String ss = "2147483648";
        //Integer i = Integer.parseInt(ss);
        Long l = Long.parseLong(ss);
        System.out.println(l);
    }
}