import java.io.File;
class TestMain{
    public static void main(String args[]){
        File f = new File("/home/pawansahu/Documents/ITEP-8(MPIF)/java");
        
        File items[] =  f.listFiles();
        for(File fileItem :  items)
          if(fileItem.isFile())
          System.out.println(fileItem.getName());
    }
}