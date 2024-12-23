import java.util.TreeSet;
/*
   TreeSet
     |-----TreeSet()-----> DNSO----> Comparable
     |-----TreeSet(Comparator)
     |-----TreeSet(SortedSet)
     |-----TreeSet(Collection)
 */
class TestMain{
    public static void main(String args[]){
       TreeSet<Integer> ts = new TreeSet<Integer>();
       ts.add(100);
       ts.add(50);
       ts.add(150);
       ts.add(75);
       ts.add(120);
       ts.add(165);
       ts.add(39);
       ts.add(165);
       for(Integer element : ts)
         System.out.println(element); 
    }
}