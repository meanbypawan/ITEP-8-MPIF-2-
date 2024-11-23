class Arithmetic{
    public void operation(int x, int y){
        System.out.println("Addition : "+(x+y));
    }
}

class A extends Arithmetic{
    public void operation(int x, int y){
        System.out.println("Subtraction : "+(x-y));
    }
}
class B extends Arithmetic{
    public void operation(int x, int y){
        System.out.println("Multiplication : "+(x*y));
    }
}

class TestMain{
    public static void main(String args[]){
        Arithmetic ref;
        ref = new B();
        ref.operation(20,10); //---> 200
    }
}