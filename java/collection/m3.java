import java.util.TreeMap;
import java.util.Map;
import java.util.ArrayList;
/*
   Category
   Electronic
     |----Mobile
     |----TV
     |----WashingMachine
     |----Fridge
   Cosmetics
     |---Lipstick
     |---Eyeliner
     |---Body lotion
     |---Perfume
   Furniture
     |---Table
     |---Chair
     |---Sofa
     |---Bed     

 */
class TestMain{
    public static void main(String args[]){
       TreeMap<String,ArrayList<String>> tm = new TreeMap<String,ArrayList<String>>();
       
       ArrayList<String> electronicItems = new ArrayList<String>();
       electronicItems.add("Mobile");
       electronicItems.add("TV");
       electronicItems.add("WashingMachine");

       ArrayList<String> cosmeticsItems = new ArrayList<String>();;
       cosmeticsItems.add("Lipstick");
       cosmeticsItems.add("Eyeliner");
       cosmeticsItems.add("Body lotion");

       ArrayList<String> furnitureItem = new ArrayList<String>();
       furnitureItem.add("Table");
       furnitureItem.add("Chair");
       furnitureItem.add("Bed");

       tm.put("Electronics",electronicItems);
       tm.put("Cosmetics",cosmeticsItems);
       tm.put("Furniture",furnitureItem);

       for(Map.Entry<String,ArrayList<String>> e : tm.entrySet()){
          System.out.println("Category : "+e.getKey());
          ArrayList<String> al = e.getValue();
          for(String item : al)
            System.out.println(item);
          System.out.println("--------------------------");  
       }
    }
}







