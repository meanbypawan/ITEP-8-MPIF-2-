import java.util.TreeSet;
import java.util.Comparator;
class TestMain{
  public static void main(String args[]){
    TreeSet<Employee> ts = new TreeSet<Employee>(new SortByAge());
    ts.add(new Employee(1,"A",21,90000));
    ts.add(new Employee(2,"B",28,120000));
    ts.add(new Employee(3,"E",29,150000));
    ts.add(new Employee(4,"C",22,95000));
    ts.add(new Employee(6,"D",25,99000));
    ts.add(new Employee(8,"G",24,87000));
    ts.add(new Employee(5,"F",23,75000));
    ts.add(new Employee(9,"X",21,90000));
    ts.add(new Employee(10,"Y",28,120000));
    ts.add(new Employee(11,"Z",29,150000));
    
    for(Employee e : ts)
      System.out.println(e);
  }
}