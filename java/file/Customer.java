import java.io.Serializable;
class Customer implements Serializable{
    public static final long serialVersionUID= 1L;
    private int id;
    private String name;
    private int age;
    private String contact;
    private String address;
    private String accountNo;
    private String nomineeName;
    public Customer(int id, String name, int age, String contact,String address){
        this.id = id;
        this.name = name;
        this.age = age;
        this.contact = contact;
        this.address = address;
    }
    public String toString(){
        return id+" "+name+" "+age+" "+contact+" "+address;
    }
}