class Employee implements Comparable<Employee>{
    private int id;
    private String name;
    private int age;
    private int salary;
    public Employee(int id, String name, int age, int salary){
        this.id = id;
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    public String toString(){
        return id+" "+name+" "+age+" "+salary;
    }
    public int getAge(){
        return this.age;
    }
    public int getSalary(){
        return salary;
    }
    public String getName(){
        return name;
    }
    public int compareTo(Employee e){
        return this.id - e.id;
    }
}










