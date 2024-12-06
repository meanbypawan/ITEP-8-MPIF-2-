import java.io.FileOutputStream;
import java.io.ObjectOutputStream;
class TestMain{
    public static void main(String args[]){
        try{
          FileOutputStream fout = new FileOutputStream("customer.txt");
          ObjectOutputStream oos = new ObjectOutputStream(fout);
          Customer c = new Customer(100,"XYZ",25,"9009111222","Polo-ground, indore");
          oos.writeObject(c);
          System.out.println("Operation success....");
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
}