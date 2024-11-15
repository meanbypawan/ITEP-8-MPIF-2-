class Area{
    private int l,w;
    public Area(int l,int w){
        this.l  = l;
        this.w = w;
    }
    public int getArea(){
        return l*w;
    }
}
class Volume extends Area{
    private int h;
    public Volume(int l, int w, int h){
      super(l,w);
      this.h = h;
    }
    public int getVolume(){
        return getArea()*h;
    }
}
class Density extends Volume{
    private double mass;
    public Density(int l, int w, int h,double mass){
       super(l,w,h);
       this.mass = mass;
    }
    public double getDensity(){
        return mass/getVolume();
    }
}
class TestMain{
    public static void main(String args[]){
        Density d = new Density(2,3,4,5);
        // Volume v = new Volume(2,3,4);
        System.out.println("Area : "+d.getArea());
        System.out.println("Volume : "+d.getVolume());
        System.out.println("Density : "+d.getDensity());
    }
}