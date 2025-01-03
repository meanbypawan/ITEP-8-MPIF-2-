package p1;

import java.sql.Connection;
import java.sql.Statement;

public class TestInsert {
  public static void main(String args[]) {
	Connection con = null;
	try {
		con = GetConnection.getConnection();
		String sql = "insert into employee(name,email,salary,skill,age,gender,departmentId,contact,cityId) values('test','test@gmail.com',56000,'java',21,'male',1,'9009357574',1)";
	 	Statement st =  con.createStatement();
	 	int x = st.executeUpdate(sql);
	    if(x!=0)
	    	System.out.println("Insertion succes...");
	}
	catch(Exception e) {
		e.printStackTrace();
	}
	finally {
		try {
			con.close();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}
	
  }
}
