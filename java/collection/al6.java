import java.util.ArrayList;
import java.util.Collections;
class TestMain{
    public static void main(String args[]){
        ArrayList<Customer> al = new ArrayList<Customer>();
        al.add(new Customer(1,"A",23));
        al.add(new Customer(3,"C",22));
        al.add(new Customer(2,"B",25));

        Collections.sort(al);

        System.out.println(al); 

    }
}