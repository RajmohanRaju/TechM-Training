//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
import java.util.*;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args)
    {
        ArrayList1 t1 = new ArrayList1();
        t1.start();

        LinkedList2 t2 = new LinkedList2();
        t2.start();

        vector3 t3 = new vector3();
        t3.start();

        stack4 t4 = new stack4();
        t4.start();


    }
    }
    class ArrayList1 extends Thread
    {
        public void run()
        {
            List<Integer> list1 = new ArrayList<>();
            //System.out.println("Is list1 empty? "+list1.isEmpty());
            list1.add(35);
            list1.add(23);
            list1.add(67);
            list1.add(82);
            list1.add(56);
            list1.add(49);
            list1.add(49);
            list1.add(49);
            //System.out.println("Is list1 empty? "+list1.isEmpty());
            //  System.out.println("The given list is:"+list1);
            System.out.println("Number of elements in the list: "+list1.size());
            //Adding one element
            list1.add(12);
            System.out.println("After adding one element:");
            System.out.println("The given list is :"+list1);
            System.out.println("The number of elements in the list: "+list1.size());
//Checking for an element
            System.out.println("Is 566 available in the list:"+list1.contains(566));
            System.out.println("The given list before removing elements is :"+list1);
            list1.remove(2);//Removing element by its index
            list1.remove(3);//Removing element by its index
            System.out.println("After removing elements:");
            System.out.println("The given list is :"+list1);
            System.out.println("The number of elements in the list: "+list1.size());


        }
    }
class LinkedList2 extends Thread
{
    public void run()
    {
        List<Integer> list1 = new LinkedList<>();
        //System.out.println("Is list1 empty? "+list1.isEmpty());
        list1.add(35);
        list1.add(23);
        list1.add(67);
        list1.add(82);
        list1.add(56);
        list1.add(49);
        list1.add(49);
        list1.add(49);
        //System.out.println("Is list1 empty? "+list1.isEmpty());
        //  System.out.println("The given list is:"+list1);
        System.out.println("Number of elements in the list: "+list1.size());
        //Adding one element
        list1.add(12);
        System.out.println("After adding one element:");
        System.out.println("The given list is :"+list1);
        System.out.println("The number of elements in the list: "+list1.size());
//Checking for an element
        System.out.println("Is 566 available in the list:"+list1.contains(566));
        System.out.println("The given list before removing elements is :"+list1);
        list1.remove(2);//Removing element by its index
        list1.remove(3);//Removing element by its index
        System.out.println("After removing elements:");
        System.out.println("The given list is :"+list1);
        System.out.println("The number of elements in the list: "+list1.size());


    }
}
class vector3 extends Thread
{
    public void run()
    {
        List<Integer> list1 = new Vector<>();
        //System.out.println("Is list1 empty? "+list1.isEmpty());
        list1.add(35);
        list1.add(23);
        list1.add(67);
        list1.add(82);
        list1.add(56);
        list1.add(49);
        list1.add(49);
        list1.add(49);
        //System.out.println("Is list1 empty? "+list1.isEmpty());
        //  System.out.println("The given list is:"+list1);
        System.out.println("Number of elements in the list: "+list1.size());
        //Adding one element
        list1.add(12);
        System.out.println("After adding one element:");
        System.out.println("The given list is :"+list1);
        System.out.println("The number of elements in the list: "+list1.size());
//Checking for an element
        System.out.println("Is 566 available in the list:"+list1.contains(566));
        System.out.println("The given list before removing elements is :"+list1);
        list1.remove(2);//Removing element by its index
        list1.remove(3);//Removing element by its index
        System.out.println("After removing elements:");
        System.out.println("The given list is :"+list1);
        System.out.println("The number of elements in the list: "+list1.size());


    }
}
class stack4 extends Thread
{
    public void run()
    {
        List<Integer> list1 = new Stack<>();
        //System.out.println("Is list1 empty? "+list1.isEmpty());
        list1.add(35);
        list1.add(23);
        list1.add(67);
        list1.add(82);
        list1.add(56);
        list1.add(49);
        list1.add(49);
        list1.add(49);
        //System.out.println("Is list1 empty? "+list1.isEmpty());
        //  System.out.println("The given list is:"+list1);
        System.out.println("Number of elements in the list: "+list1.size());
        //Adding one element
        list1.add(12);
        System.out.println("After adding one element:");
        System.out.println("The given list is :"+list1);
        System.out.println("The number of elements in the list: "+list1.size());
//Checking for an element
        System.out.println("Is 566 available in the list:"+list1.contains(566));
        System.out.println("The given list before removing elements is :"+list1);
        list1.remove(2);//Removing element by its index
        list1.remove(3);//Removing element by its index
        System.out.println("After removing elements:");
        System.out.println("The given list is :"+list1);
        System.out.println("The number of elements in the list: "+list1.size());


    }
}


