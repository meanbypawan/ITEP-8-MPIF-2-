import java.util.Comparator;
class SortByAge implements Comparator<Employee>{
   public int compare(Employee o1, Employee o2){
      int x =  o1.getAge() - o2.getAge();
      if(x == 0)
        return 1;
      return x;  
   }
}