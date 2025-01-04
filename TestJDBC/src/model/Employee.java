package model;

public class Employee {
	private Integer id;
	private String name;
	private String skill;
	private String email;
	private Integer salary;
	private String gender;
	private Integer age;
	private String contact;
	private String address;
	private Integer departmentId;
	private Integer cityId;

	public Employee(Integer id, String name, String skill, String email, Integer salary, String gender, Integer age,
			String contact, String address, Integer departmentId, Integer cityId) {
		super();
		this.id = id;
		this.name = name;
		this.skill = skill;
		this.email = email;
		this.salary = salary;
		this.gender = gender;
		this.age = age;
		this.contact = contact;
		this.address = address;
		this.departmentId = departmentId;
		this.cityId = cityId;
	}

	public Employee(String name, String skill, String email, Integer salary, String gender, Integer age, String contact,
			String address, Integer departmentId, Integer cityId) {
		super();
		this.name = name;
		this.skill = skill;
		this.email = email;
		this.salary = salary;
		this.gender = gender;
		this.age = age;
		this.contact = contact;
		this.address = address;
		this.departmentId = departmentId;
		this.cityId = cityId;
	}

	public Employee() {
		super();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSkill() {
		return skill;
	}

	public void setSkill(String skill) {
		this.skill = skill;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Integer getSalary() {
		return salary;
	}

	public void setSalary(Integer salary) {
		this.salary = salary;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Integer getDepartmentId() {
		return departmentId;
	}

	public void setDepartmentId(Integer departmentId) {
		this.departmentId = departmentId;
	}

	public Integer getCityId() {
		return cityId;
	}

	public void setCityId(Integer cityId) {
		this.cityId = cityId;
	}

}
