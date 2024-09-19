class TestMain{
    public static void main(String args[]){
       int x=5,y;
       y = ++x - x-- * ++x / x++;
       //    6 - 6   *   6 / 6
       //    6 - 36 /6
       //    6 - 6
       // x = 7
       System.out.println("x : "+x+" y  :"+y);            
    }
}