import java.util.ArrayList;
import java.util.Collections;
class TestMain{
    public static void main(String args[]){
      ArrayList<String> al = new ArrayList<String>();

      al.add("A");
      al.add("C");
      al.add("B");
      al.add("A");
      al.add("D");
      System.out.println(al);
      //System.out.println(al.contains("BB"));
      Collections.sort(al);
      System.out.println(al);
    }
}