/*
  Conditional Operator 
  Syntax :-
  condition/BE ? expression-2 : expression-3;
 */
class TestMain{
    public static void main(String args[]){
      int a=10,b=20,c=30;
      /*
      int max = (a > b) ? a : b ;
      max = (max > c) ? max : c;
      */
      int max = (a > b && a > c) ? a : (b>c) ? b : c;
      System.out.println("Greater Value : "+max);
    }
}







