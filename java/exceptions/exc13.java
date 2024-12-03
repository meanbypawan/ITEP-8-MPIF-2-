class TestMain{
    public static void main(String args[]){
        try{
             //throw new Exception();
             throw new Throwable();
             //throw new Error();
        }
        catch(Object e){
         System.out.println("Caught........");
        }
        System.out.println("At the end...");
    }
}