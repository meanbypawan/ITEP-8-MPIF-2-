import java.util.Scanner;
class Validation{
    static public boolean validateMobile(String mobile){
        try{
            Long.parseLong(mobile);
            if(mobile.length()!=10)
              return false;
        }
        catch(Exception e){
            //e.printStackTrace();
            return false;
        }
        return true;
    }
    static public boolean validateName(String name){
        boolean status = true;
        name = name.trim();
        for(int i=0; i<name.length(); i++){
            char ch = name.charAt(i);
            if(Character.isSpace(ch))
              continue;
            if(!Character.isAlphabetic(ch))
             return false;
        }
        return status;

    }
}
class TestMain{
    public static void main(String args[]){
      Scanner sc = new Scanner(System.in);  
      System.out.println("Enter mobile number");
      String mobile = sc.next().trim();
      if(Validation.validateMobile(mobile))
        System.out.println("Valid Mobile");
      else
        System.out.println("Invalid mobile");  
      /*
      System.out.println("Enter Name");
      String name = sc.nextLine();
      if(Validation.validateName(name))
        System.out.println("Thank you...");
      else
        System.out.println("Invalid name...");  
     */
    }
}