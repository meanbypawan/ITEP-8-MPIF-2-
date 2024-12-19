import java.util.ArrayList;
class TestMain{
    public static void main(String args[]){
       /*
       ArrayList al = new ArrayList();
       al.add(100);
       al.add("A");
       al.add(true);
       al.add(20.5);
       */
       ArrayList<Number> al = new ArrayList<Number>();
       al.add(100);
       al.add(10.5);
       al.add(2L);
       System.out.println(al);
    }
}