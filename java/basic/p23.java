// Scanner class
// Controll Statement
-------------------------------------------
/*
   n << 3
   2^3 * n == > result

   -----------------------
   n >> 3
   a. if n is even then n/2
   b. if n  is odd then (n-1)/2

   75 >> 3
   (75-1)/2 == 74 / 2 === 37
   (37-1)/2 -- 36 / 2 === 18
   18 / 2 === 9
   -------------
   -(n+1)
 */
class TestMain{
    public static void main(String args[]){
      int x=-10;
      //x = -20 << 3;
      //x = 75 >> 3;
      x = ~x; // 
      System.out.println(x);
    }
}