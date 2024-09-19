/*
  Conditional Operator 
  Syntax :-
  condition/BE ? expression-2 : expression-3;
 */
class TestMain{
    public static void main(String args[]){
      int a=10,b=20;
      int max = (a > b) ? a : b ;
      System.out.println("Greater Value : "+max);
    }
}