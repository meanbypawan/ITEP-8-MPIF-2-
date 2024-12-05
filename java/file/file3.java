/*
  JavaApplication<------Stream------->File [Text, Binary]
  Stream :-
   1. Byte Stream
      
   2. Character Stream
 --------------------------------------
  OutputSream[Write]                   InputStream[Read]
     |                                       |                   
  FileOutputStream                     FileInputStream
 */
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
class TestMain{
    public static void main(String args[]){
       try{ 
        File f = new File("abc.txt");
        FileOutputStream fout = new FileOutputStream(f,true);
        String data = "\nJava is simple";
        byte b[] =  data.getBytes();
        fout.write(b);
        System.out.println("Operation success...");
       }
       catch(IOException e){
         e.printStackTrace();
       }
    }
}










