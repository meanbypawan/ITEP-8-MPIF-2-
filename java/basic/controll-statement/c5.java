/*
  WAP to enter the basic salary of an employe. if basic salary
  is greater then 10000 then hra = 10%, ta = 5% and da = 3%
  of basic salary is given to the employee otherwise
  hra = 5% and ta = 3% of basic salary is given to the employee.
  Calculate the gross salary of an employee.
  
  Programmer :-
    DRY :- (Do not repeat yourself)
    KISS :- (Keep It Simple & Short)
 -----------------------------------------------------------   
 */
import java.util.Scanner;
class TestMain{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter basic salary of an employee..");
        int basicSalary = sc.nextInt();
        float hra=0,ta=0,da=0;
        if(basicSalary >= 10000){
            hra = (basicSalary*10)/100.0f;
            ta = (basicSalary*5)/100.0f;
            da = (basicSalary*3)/100.0f;
        }
        else{
            hra = (basicSalary*5)/100.0f;
            ta = (basicSalary*3)/100.0f;
        }
        float grossSalary = basicSalary + hra + ta + da;
        System.out.println("HRA : "+hra);
        System.out.println("TA : "+ta);
        if(da !=0 )
         System.out.println("DA : "+da);
        System.out.println("Gross Salary : "+grossSalary);
        
    }
}




