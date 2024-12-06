// try with resources
import java.io.FileWriter;
class TestMain{
    public static void main(String args[]){
      try(FileWriter fw = new FileWriter("xyz.txt",true);){
        String data = "Java is object oriented programming language...";
        fw.write(data);
        System.out.println("operation success...");

      }
      catch(Exception e){
        e.printStackTrace();
      }
    //   finally{
    //     try{ 
    //       fw.close();
    //     }
    //     catch(Exception e){
    //         e.printStackTrace();
    //     }  
    //   }
    }
}