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
       LinkedHashSet<StringBuffer> hs = new LinkedHashSet<StringBuffer>();
       hs.add(new StringBuffer("A"));
       hs.add(new StringBuffer("C"));
       hs.add(new StringBuffer("C"));
       hs.add(new StringBuffer("B"));
       hs.add(new StringBuffer("B"));
       hs.add(new StringBuffer("D"));
       hs.add(new StringBuffer("D"));
       hs.add(new StringBuffer("E")); 
       //System.out.println(hs);      
       for(StringBuffer sb : hs)
        System.out.println(sb.hashCode());
    }
}