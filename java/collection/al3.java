import java.util.ArrayList;
/*
  remove(int) : E
  remove(Object) : boolean

  remove(5);
 */
class TestMain{
    public static void main(String args[]){
       ArrayList<Integer> al = new ArrayList<Integer>();
       al.add(10);
       al.add(5);
       al.add(8);
       al.add(30);
       al.add(4);
       al.add(10);
       al.add(5);
       al.add(8);
       System.out.println(al);
       //al.remove(5); // index
       al.remove(new Integer(5));
       System.out.println(al);
    //    for(int i=0; i<al.size(); i++){
    //       int element = al.get(i);
    //       System.out.println(element);
    //    }
    }
}