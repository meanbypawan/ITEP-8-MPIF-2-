import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Vector;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.TreeSet;
class TestMain{
    public static void main(String args[]){
       ArrayList<String> al = new ArrayList<String>();
       LinkedList<String> ll = new LinkedList<String>();
       Vector<String> v = new Vector<String>();
       HashSet<String>hs = new HashSet<String>();
       LinkedHashSet<String>lhs = new LinkedHashSet<String>();
       TreeSet<String> ts = new TreeSet<String>();

       al.add(null);
       al.add(null);
       System.out.println("ArrayList : "+al);

       ll.add(null);
       ll.add(null);
       System.out.println("LinkedList : "+ll);
       v.add(null);
       v.add(null);
       System.out.println("Vector : "+v);
       hs.add(null);
       hs.add(null);
       System.out.println("HashSet : "+hs);
       
       lhs.add(null);
       lhs.add(null);
       System.out.println("LinkedHashSet : "+lhs);

       ts.add(null);
       System.out.println("TreeSet : "+ts);
    }
}




