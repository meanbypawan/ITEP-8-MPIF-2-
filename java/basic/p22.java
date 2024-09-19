
/*
  Bitwise :- Integer data
    &   --> AND
    |   --> OR
    ^   --> XOR
    <<  --> Left shift
    >>  --> Right shift
    ~   -->Negation
    
    int x;
    x = 15 & 11;
        8  4  2  1
      ----------------------  
        1  1  1  1  ==> 15
        1  0  1  1  ==> 11 
      ----------------------
        1  0  1  1 ====>11 

    x = 15 ^ 10;
    1 0 
    1 0 ==> 0

    1 1 1 1
    1 0 1 0
    ---------
    0 1 0 1
    --------
      5     
-----------------------------------
    n & n == n
    n | n == n
    n ^ n == 0
 */
class TestMain{
    public static void main(String args[]){
       int n;
       n = -10;
       String s = ((n&1)==0) ?  "Even" : "Odd";
       System.out.println(s);
    }
}