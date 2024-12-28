import java.util.TreeMap;
import java.util.Map;
class TestMain{
    public static void main(String args[]){
        
        TreeMap<Integer,String> tm = new TreeMap<Integer,String>();
        tm.put(1000,"A");
        tm.put(1001,"B");
        tm.put(1004,"C");
        tm.put(1002,"F");
        tm.put(1003,"D");
        tm.put(1005,"E");

        for(Map.Entry<Integer,String> e : tm.entrySet())
          System.out.println(e.getKey()+"  "+e.getValue());
    }
}