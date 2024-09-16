// Arithmetic Operator
class TestMain{
    public static void main(String args[]){
      System.out.println("7/2 : "+(7/2)); // 3
      System.out.println("7%2 : "+(7%2)); // 1
      System.out.println("-7%2 : "+(-7%2)); // -1
      System.out.println("7%-2  : "+(7%-2)); // 1
      System.out.println("-7%-2  : "+(-7%-2));// -1
      System.out.println("2%7 : "+(2%7)); // 2
      System.out.println("2%-7 : "+(2%-7)); // 2
      System.out.println("7.5%2 :"+(7.5%2)); //1.5
      System.out.println("7.5/2 : "+(7.5/2)); //3.75 
      //System.out.println("7/0 : "+(7/0)); // AirthmeticException
      //System.out.println("7%0 : "+(7%0));
      System.out.println("7.5%0 : "+(7.5%0));// NaN
      System.out.println("7.5/0 : "+(7.5/0));
      System.out.println("-7.5/0 : "+(-7.5/0));
      System.out.println("0/7 : "+(0/7)); // 0 
      System.out.println("143%10 : "+(143%10));
      System.out.println("143/10 : "+((143/10)%10));
    }
}