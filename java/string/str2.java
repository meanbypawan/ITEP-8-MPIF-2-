class TestString{
    private String s;
    public TestString(String s){
        this.s = s;
    }

    public int compare(TestString ss){
     int firstLength = this.s.length();
     int secondLength = ss.s.length();
     int maxLength = secondLength;
     
     if(firstLength > secondLength)
      maxLength = firstLength; 
     
     for(int i=0; i<maxLength; i++){
        int firstChar = -1;
        int secondChar = -1;
        if(i < firstLength)
          firstChar = this.s.charAt(i);
        if(i < secondLength)
          secondChar = ss.s.charAt(i);

        if((firstChar - secondChar)!=0)
          return firstChar - secondChar;    
        
     }
     return 0;
    }
    public String getUpperCase(){
        String result = "";
        for(int i=0; i<this.s.length(); i++){
            char ch = this.s.charAt(i);
            if(ch >= 'a' && ch<= 'z'){
                ch = (char)(ch - 32);
            }
            result = result + ch;
        }
        return result;
    }
    public String toString(){
        //return this.getClass().getName()+"@"+this.hashCode();
        return s;
    }
}
class TestMain{
    public static void main(String args[]){
        TestString s1 = new TestString("abc"); // s1:{s: "abc"}
        //String result = s1.getUpperCase();
        TestString s2 = new TestString("cba");// s2: {s: "cba"}

        int x = s1.compare(s2);
        if(x == 0)
          System.out.println(s1+" == "+s2);
        else if(x > 0)
            System.out.println(s1+" > "+s2);
           else
            System.out.println(s1+ " < "+s2);  
    }
}