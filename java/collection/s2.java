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
       LinkedHashSet<String> hs = new LinkedHashSet<String>();
       hs.add(new String("A"));
       hs.add(new String("C"));
       hs.add(new String("C"));
       hs.add(new String("B"));
       hs.add(new String("B"));
       hs.add(new String("D"));
       hs.add(new String("D"));
       hs.add(new String("E"));
       System.out.println(hs);      
    }
}