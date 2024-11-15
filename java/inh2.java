/*
  Area :
    prop:-  l,w
    behaviour: -  getArea() : int
 Volume :-
    prop :- l,w,h
    behavoiur:--- getArea(), getVolume()    
 private :-
*/
class Area{
  private int l,w;
  public void setData(int l, int w){
    this.l = l;
    this.w = w;
  }
  public int getArea(){
    return l*w;
  }
}
class Volume extends Area{
   private int h;
   public void setData(int l,int w, int h){
     setData(l,w);
     this.h = h;
   }
   public int getVolume(){
    return getArea()*h;
   }
}
class TestMain{
    public static void main(String args[]){
       Volume v = new Volume(); // [l,w,h]
       v.setData(2,3,4);
       System.out.println("Area : "+v.getArea());
       System.out.println("Volume : "+v.getVolume());
    }
}









