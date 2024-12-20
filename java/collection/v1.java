import java.util.Vector;
/*
  ArrayList:-
    ArrayList()  ------------> 10
    ArrayList(int)
    ArrayList(Collection)
  
  LinkedList:-
    LinkedList()-----------> empty list
    LinkedList(Collection)

  Vector:-
    Vector() --------> 10
    Vector(int) -----> ic
    Vector(int,int) --> ic, capacityIncrementor
    Vector(Collection)  
    ------------------
    Set
     hashCode(),
     equals()
     --------------
     Comparator
     Comparable

 */
class TestMain{
    public static void main(String args[]){
        Vector<Integer> v = new Vector<Integer>(3,3);
        System.out.println(v.capacity());
        v.add(10);
        v.add(20);
        v.add(30);
        v.add(40); // 6
        System.out.println(v.capacity());
        v.add(50);
        v.add(60);
        v.add(70); // 9
        System.out.println(v.capacity()); // 12
    }
}


