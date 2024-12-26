// Fail fast , Fail safe 
import java.util.ArrayList;
import java.util.Iterator;
import java.util.ListIterator;
/*
  Iterator :-
  1.   Iterator itr = collectionObject.iterator();
  2.   iterator() available in collection so it is applicable on all child classes
       of Collection.
  3.   Iterator  can only move in forward direction     
  4.   Iterator cursor positioned can not be change means by defautl it will start
       from beforeFirst.
  ListIterator :-
  1.   ListIterator lit = listObject.listIterator();
       ListIterator lit = listObject.listIterator(int);
  2. listIterator() is available in List so it is applicable on all child
      classes of List only [AL, LL, Vector]
  3. ListIterator can move in forward as well as backward direction both     
  4. For Traversing we can change the position of ListIterator.
  5. ListIterator is a child of Iterator.
 */
class TestMain{
    public static void main(String args[]){
       ArrayList<String> al = new ArrayList<String>();
       al.add("A");
       al.add("B");
       al.add("C");
       al.add("z");
       al.add("Y");
       al.add("X");

       
       /*ListIterator<String>lit =  al.listIterator(al.size());
       while(lit.hasPrevious())
       {
          String element = lit.previous();
          System.out.println(element);
       }*/

       /*ListIterator<String>lit =  al.listIterator();
       while(lit.hasNext())
       {
          String element = lit.next();
          System.out.println(element);
       }*/
       /*Iterator<String> itr = al.iterator();
       while(itr.hasNext())
       {
          String element = itr.next();
          System.out.println(element);
       }*/

    }
}