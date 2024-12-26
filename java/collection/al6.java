import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
class SortByAge implements Comparator<Customer>{
   public int compare(Customer o1, Customer o2){
    return o1.getAge()- o2.getAge();
   }
}
class TestMain{
    public static void main(String args[]){
        ArrayList<Customer> al = new ArrayList<Customer>();
        al.add(new Customer(1,"A",23));
        al.add(new Customer(3,"C",22));
        al.add(new Customer(2,"B",25));
        al.add(new Customer(4,"D",22));

        Collections.sort(al,new SortByAge());

        System.out.println(al); 

    }
}