//import java.io.FileReader;
import java.io.File;
import java.util.Scanner;
class TestMain{
    public static void main(String args[]){
      try{
         File f = new File("abc.txt");
         Scanner sc = new Scanner(f);
         while(sc.hasNextLine()){
           String line =  sc.nextLine();
           System.out.println(line);
         }
      }
      catch(Exception e){
        e.printStackTrace();
      }
    }
}