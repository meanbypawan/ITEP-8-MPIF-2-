/*
1. interface I1{}
   class C1 implements I1{}
2. interface I1{}
   interface I2 extends I1{}   

3. class C1{}
   class C2{}
   class C3 extends C1,C2{}   // invalid

4. interface I1{}
   interface I2{}
   interface I3 extends I1,I2{} // valid

5  interface I1{}
   class C1{}
   
   class C2 extends C1 implements I1{}
   class C2 implements I1 extends C1{} // invalid 

6  class C1{}, interface I1{} , interface I2{}
   class C2 extends C1 implements I1,I2{}
---------------------------------------------------------------
       University [RGPV] interface
                   |--bs()
                   |--pl()
                   |--canteen()
                   |--dc()
    
       class Acropolis implements RGPV{
          bs(){}
          pl(){}
          canteen(){}
          dc(){}
       }   
       class LNCT  implements RPV{
        bs(){}
        pl(){}
        canteen(){}
        dc(){}
       }
       class Prestige implements RGPV{
        bs(){}
        pl(){}
        canteen(){}
        dc(){}
       }
*/
