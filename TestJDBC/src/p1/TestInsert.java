package p1;

import java.sql.Connection;
import java.sql.Statement;

import dao.EmployeeDAO;
import model.Employee;

public class TestInsert {
  public static void main(String args[]) {
	try {
	  Employee e = new Employee();
	  e.setName("Dev");
	  e.setAddress("Polo ground, Indore");
	  e.setEmail("dev@gmail.com");
	  e.setContact("9009857585");
	  e.setAge(21);
	  e.setGender("Male");
	  e.setCityId(1);
	  e.setDepartmentId(1);
	  e.setSkill("reactjs");
	  e.setSalary(120000);
	  
	  boolean status = EmployeeDAO.save(e);
	  if(status)
		  System.out.println("Employee saved...");
	  else
		  System.out.println("Not saved...");
	}
	catch(Exception e) {
		e.printStackTrace();
	}
	
	
  }
}
