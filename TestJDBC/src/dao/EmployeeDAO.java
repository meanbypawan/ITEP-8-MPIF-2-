package dao;

import java.sql.Connection;
import java.sql.Statement;
import java.util.ArrayList;

import model.Employee;
import p1.GetConnection;

public class EmployeeDAO {
   public static boolean save(Employee e) {
	   try(Connection con = GetConnection.getConnection();){
		   String sql = "insert into employee(name,email,salary,gender,age,address,skill,contact,departmentId,cityId) "
		   		+ "values('"+e.getName()+"','"+e.getEmail()+"',"+e.getSalary()+",'"+e.getGender()+"',"+e.getAge()+",'"+e.getAddress()+"',"
		   				+ "'"+e.getSkill()+"','"+e.getContact()+"',"+e.getDepartmentId()+","+e.getCityId()+")";
	       //System.out.println(sql);
	       Statement st = con.createStatement();
	       int x = st.executeUpdate(sql);
	       if(x!=0)
	    	   return true;
	   }
	   catch(Exception ee) {
		   ee.printStackTrace();
	   }
	   return false;
   }
   public static ArrayList<Employee> get(){return null;}
   public static void update(Employee e) {} 
   
   public static boolean delete(Integer id) {
	   try (Connection con = GetConnection.getConnection();){
		   String sql = "delete from employee where id ="+id;
	       Statement st = con.createStatement();
	       if(st.executeUpdate(sql)!=0)
	    	   return true;
	   }
	   catch(Exception e) {
		   e.printStackTrace();
	   }
	   return false;
   }
}
