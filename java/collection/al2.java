import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
class TestMain{
    public static void main(String args[]){
      ArrayList<String> al = new ArrayList<String>(3); // 10
      /*
        11th--> It will Creat new arrayList and copy data of oldone --> 5min
        16th--> It will create new arrayList and copy old data ------> 7 min
        24th--> It will create new arrayList and copy old data -----> 10 min
       */
      // String arr[] = new String[3];
      al.add("A");
      al.add("B");
      al.add("C");
      al.add("Z");
      // String arr[] = new String[5];
      al.add("Y");
      al.add("X");
      System.out.println("Total Element : "+al.size()); // 6
      System.out.println(al);
      for(int i=0; i<al.size(); i++){
        String element = al.get(i);
        System.out.println(element);       
      }

      Map<Integer,String> map = new HashMap<Integer,String>();
      System.out.println(map.hashCode());
    }
}