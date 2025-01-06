package p1;

import java.util.ArrayList;

import dao.EmployeeDAO;
import model.Employee;

public class TestSelect {
  public static void main(String argsg[]) {
	 ArrayList<Employee> al =  EmployeeDAO.get();
     for(Employee e : al) {
    	 System.out.println(e.getId()+"  "+e.getName()+"  "+e.getContact()+" "+e.getSkill()+"  "+e.getSalary());
     }
  }
}
