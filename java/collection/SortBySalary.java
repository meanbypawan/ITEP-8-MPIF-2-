import java.util.Comparator;
class SortBySalary implements Comparator<Employee>{
   public int compare(Employee o1, Employee o2){
      int salaryDifference = o2.getSalary() - o1.getSalary();
      if(salaryDifference == 0)
        return 1;
     return salaryDifference;   
   }
}