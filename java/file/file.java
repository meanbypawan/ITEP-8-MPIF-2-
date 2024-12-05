import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
class TestMain{
    public static void main(String args[]){
      File f = new File("abc.txt");
      System.out.println("Path  : "+f.getAbsolutePath());
      System.out.println("Name : "+f.getName());
      System.out.println("canRead : "+f.canRead());
      System.out.println("canWrite : "+f.canWrite());
      System.out.println("canExecute : "+f.canExecute());
      System.out.println("isHidden : "+f.isHidden());
      System.out.println("Size : "+f.length());
      long timeStamp =  f.lastModified();
      SimpleDateFormat sd = new SimpleDateFormat("dd/MM/yyyy hh:mm");
      String date = sd.format(new Date(timeStamp));
      System.out.println("lastModifed : "+date);
      System.out.println("isFile : "+f.isFile());
      System.out.println("isDirectory : "+f.isDirectory());
    }
}