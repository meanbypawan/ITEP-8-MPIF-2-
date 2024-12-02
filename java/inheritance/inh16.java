interface I{
    int operation(int x, int y);
}

class TestMain{
    public static void main(String args[]){
        I obj = (a,b)-> a+b;
        I obj2 = (a,b)->a*b;
        I obj3 = (a,b)->{
           if(a > b)
             return a;
           return b;  
        };
        System.out.println("Addition : "+obj.operation(20,10));
        System.out.println("Multiplication : "+obj2.operation(20,10)); 
        System.out.println("Max : "+obj3.operation(20,10));
    }
}