import java.io.*;

public class SerAndDser {

    public void serializablee() throws IOException {
        try {
            //Creating the object
            Employee s1 = new Employee(211, "ravi", "gmail.com");
            //Creating stream and writing the object
            FileOutputStream fout = new FileOutputStream("a.txt");
            ObjectOutputStream out = new ObjectOutputStream(fout);
            out.writeObject(s1);
            out.flush();
            //closing the stream
            out.close();
            System.out.println("success");
        } catch (Exception e) {
            System.out.println(e);
        }


    }



    public void deserializable() throws IOException {
        try{
            //Creating stream to read the object
            ObjectInputStream in=new ObjectInputStream(new FileInputStream("a.txt"));
            Employee s= (Employee) in.readObject();
            //printing the data of the serialized object
            System.out.println(s.roll+" "+s.name);
            //closing the stream
            in.close();
        }catch(Exception e){System.out.println(e);}
    }



}





