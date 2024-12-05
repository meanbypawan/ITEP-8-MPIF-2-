import java.io.File;
import java.io.FileInputStream;
class TestMain{
    public static void main(String rgs[]){
      try{
         //File f = File("abc.txt");
         FileInputStream fin = new FileInputStream("abc.txt");
         String data = "";
         while(true){
           int x = fin.read();
           if(x == -1)
             break;
           data = data + (char)x;  
         }  
         System.out.println(data);
      }
      catch(Exception e){
        e.printStackTrace();
      }
    }
}