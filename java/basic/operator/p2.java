/*
   Increment/Decrement
   ++ / --
   ------------
   a. Pre increment :- [First increment value by 1 then assign]
      ++x; 
   b. Post increment:- [First assign the value then increment by 1]
      x++
   -------------------------------------------------------------

 */
class TestMain{
    public static void main(String args[]){
       int x=10,y;
       
       //y = ++x;
       y = x++;
       /*
          y = x; // y  : 10
          x = x + 1; // x : 11
        */

       System.out.println("x : "+x+" y  : "+y);
    }
}





