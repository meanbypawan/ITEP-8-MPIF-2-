import java.util.Scanner;
interface Shape{
    public void getArea();
}

class Circle implements Shape{
   public void getArea(){
     Scanner sc = new Scanner(System.in);
     System.out.println("Enter radius...");
     int r = sc.nextInt();
     System.out.println("Area : "+(3.14*r*r));
   }
}
class Rectangle implements Shape{
    public void getArea(){
     Scanner sc = new Scanner(System.in);
     System.out.println("Enter length and width...");
     int l = sc.nextInt();
     int w = sc.nextInt();
     System.out.println("Area : "+(l*w));
   }
}
class TestMain{
    public static void main(String args[]){
      Scanner sc = new Scanner(System.in);
      System.out.println("Press 1 for circle");
      System.out.println("Press 2 for rectangle");
      System.out.println("Enter your choice");
      int choice = sc.nextInt();
      Shape s=null;
      if(choice == 1)
        s = new Circle();
      else if(choice == 2)
        s = new Rectangle();
      
      if(s!=null) 
        s.getArea();   
    }
}









