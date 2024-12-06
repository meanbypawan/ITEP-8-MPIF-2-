/*
  Upcasting :- Supported by default [Parent can hold child]
  Downcasting :- Converting parent object into child
 */
import java.io.FileInputStream;
import java.io.ObjectInputStream;

class TestMain{
    public static void main(String args[]){
      try{
         FileInputStream fin = new FileInputStream("customer.txt");
         ObjectInputStream ois = new ObjectInputStream(fin);
         Customer c = (Customer)ois.readObject(); //public Object readObject()
         System.out.println(c);
      }
      catch(Exception e){
        e.printStackTrace();
      }
    }
}