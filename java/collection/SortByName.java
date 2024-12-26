import java.util.Comparator;
class SortByName implements Comparator<Employee>{
  public int compare(Employee o1, Employee o2){
    String o1KaName = o1.getName();
    String o2KaName = o2.getName();

    int x = o1KaName.compareTo(o2KaName);
    if(x == 0)
      return 1000;
    return x;  
  }
}