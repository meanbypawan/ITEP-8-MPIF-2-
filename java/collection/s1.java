/*
  Collection
    |
   Set
    |
   HashSet  
     |---HashSet() ------> ic:16, load-factor :- 0.75
     |---HashSet(int)
     |---HashSet(int,float)
     |---HashSet(Collection)

   ArrayList al = new ArrayList(); // ic:10
   --
   --
   al.add(11); // 16  
 */
import java.util.LinkedHashSet;
class TestMain{
    public static void main(String args[]){
       // LF :- 0.75 , 75% out of 1
       LinkedHashSet<Integer> hs = new LinkedHashSet<Integer>();
       hs.add(100);
       hs.add(10);
       hs.add(50);
       hs.add(20);
       hs.add(40);
       hs.add(30);
       hs.add(100);
       hs.add(50);
       System.out.println(hs);      
    }
}