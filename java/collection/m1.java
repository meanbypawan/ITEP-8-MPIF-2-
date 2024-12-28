import java.util.HashMap;
import java.util.Set;
import java.util.Map;
import java.util.Iterator;
class TestMain{
    public static void main(String args[]){
       HashMap<Integer,String> hm = new HashMap<Integer,String>();
       hm.put(1000,"A");
       hm.put(1004,"B");
       hm.put(1002,"C");
       hm.put(1003,"D");
       hm.put(1003,"E");
       hm.put(null,"F");
       for(Map.Entry<Integer,String> e  : hm.entrySet())
         System.out.println(e.getKey()+"  "+e.getValue());
       /*
       Set<Map.Entry<Integer,String>> s  = hm.entrySet();
       Iterator<Map.Entry<Integer,String>>itr =  s.iterator();
       while(itr.hasNext()){
           Map.Entry<Integer,String> entry =  itr.next();
           System.out.println(entry.getKey()+"  "+entry.getValue());
       }
       */
    }
}