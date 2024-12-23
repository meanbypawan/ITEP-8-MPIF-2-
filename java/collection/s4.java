import java.util.LinkedHashSet;
class TestMain{
    public static void main(String args[]){
       LinkedHashSet<Customer> lhs = new LinkedHashSet<Customer>();
       lhs.add(new Customer(1,"A",23));
       lhs.add(new Customer(2,"B",25));
       lhs.add(new Customer(1,"A",27));
       lhs.add(new Customer(4,"C",24));
       lhs.add(new Customer(3,"D",26));
       
       for(Customer c : lhs)
         System.out.println(c+" : "+c.hashCode()); // c.toString()
    }
}