package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

import model.Employee;
import p1.GetConnection;

public class EmployeeDAO {
	
   public static boolean save(Employee e) {
	   try(Connection con = GetConnection.getConnection();){
//		   String sql = "insert into employee(name,email,salary,gender,age,address,skill,contact,departmentId,cityId) "
//		   		+ "values('"+e.getName()+"','"+e.getEmail()+"',"+e.getSalary()+",'"+e.getGender()+"',"+e.getAge()+",'"+e.getAddress()+"',"
//		   				+ "'"+e.getSkill()+"','"+e.getContact()+"',"+e.getDepartmentId()+","+e.getCityId()+")";
//	       //System.out.println(sql);
//	       Statement st = con.createStatement();
//	       int x = st.executeUpdate(sql);
	       
		   String sql = "insert into employee(name,email,salary,gender,age,address,skill,contact,departmentId,cityId) values(?,?,?,?,?,?,?,?,?,?)";
		   PreparedStatement ps = con.prepareStatement(sql);
		   ps.setString(1, e.getName());
		   ps.setString(2, e.getEmail());
		   ps.setInt(3, e.getSalary());
		   ps.setString(4, e.getGender());
		   ps.setInt(5, e.getAge());
		   ps.setString(6, e.getAddress());
		   ps.setString(7,e.getSkill());
		   ps.setString(8, e.getContact());
		   ps.setInt(9, e.getDepartmentId());
		   ps.setInt(10, e.getCityId());
		   int x = ps.executeUpdate();
		   if(x!=0)
	    	   return true;
	   }
	   catch(Exception ee) {
		   ee.printStackTrace();
	   }
	   return false;
   }
   public static ArrayList<Employee> get(){
	   ArrayList<Employee> al = new ArrayList<Employee>();
	   try (Connection con = GetConnection.getConnection();){
		   String sql = "select id,name,contact,skill,salary from employee";
		   //PreparedStatement ps = con.prepareStatement(sql,ResultSet.TYPE_FORWARD_ONLY);
		   //PreparedStatement ps = con.prepareStatement(sql,ResultSet.TYPE_SCROLL_INSENSITIVE);
		   PreparedStatement ps = con.prepareStatement(sql,ResultSet.TYPE_SCROLL_SENSITIVE,ResultSet.CONCUR_UPDATABLE);
		   ResultSet rs =  ps.executeQuery();
		   while(rs.next()) {
			   Integer id = rs.getInt(1);
			   String name = rs.getString(2);
			   String contact = rs.getString(3);
			   String skill = rs.getString(4);
			   Integer salary = rs.getInt(5);
			   if(id == 3) {
				   rs.updateInt("salary", 200000);
				   rs.updateRow();
			   }
			   id = rs.getInt(1);
			   Employee e = new Employee();
			   e.setId(id);
			   e.setName(name);
			   e.setContact(contact);
			   e.setSkill(skill);
			   e.setSalary(salary);
			   
			   al.add(e);
			   
		   }
		   
	   }
	   catch(Exception e) {
		   e.printStackTrace();
	   }
	   return al;
   }
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
