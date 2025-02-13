
public class Employee implements Serializable {

    int roll;
    String name;
    transient String email;

    Employee(int roll,String name,String email)
    {
        this.roll=roll;
        this.name=name;
        this.email=email;

    }


}
