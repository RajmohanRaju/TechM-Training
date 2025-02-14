import java.util.*;

public class SetSamples {

    public static void main(String[] args) {

        HashSet<Integer> hs = new HashSet<>();
        LinkedHashSet<String> y = new LinkedHashSet<>();
        TreeSet<Float> z = new TreeSet<>();
        setSamples(hs);
        setSamples(y);
        setSamples(z);


    }

    public static void setSamples(HashSet<Integer> hs) {

        hs.add(1);
        hs.add(25);
        hs.add(28);
        hs.add(7);
        hs.add(9);
        hs.add(14);
        hs.add(21);
        hs.add(2);
        System.out.println("HashSet Size: " + hs.size());
        System.out.println("Elements in HashSet: " + hs);
        System.out.print("Using iterator : ");
        Iterator<Integer> iterator = hs.iterator();
        while (iterator.hasNext())
            System.out.print(iterator.next() + " ");
        System.out.println();
        System.out.print("Using enhanced for loop : ");
        for (Integer element : hs) {
            if (element % 7 == 0) {
                System.out.print(element + " ");
            }
        }
        hs.remove("B");
        System.out.println("\nHashSet after removing element : " + hs);

    }

    public static void setSamples(LinkedHashSet<String> y) {

        y.add("lamborgini");
        y.add("ferrari");
        y.add("bmw");
        y.add("pegani");
        y.add("volvo");
        y.add("honda");
        y.add("suzuki");
        y.add("mercedes");
        System.out.println("HashSet Size: " + y.size());
        System.out.println("Elements in HashSet: " + y);
        System.out.print("Using iterator : ");
        Iterator<String> iterator = y.iterator();
        while (iterator.hasNext())
            System.out.print(iterator.next() + " ");
        System.out.println();
        System.out.print("Using enhanced for loop : ");
        for (String element : y) {
            if (element.length() > 5) {
                System.out.print(element + " ");
            }
        }
        y.remove("B");
        System.out.println("\nHashSet after removing element : " + y);

    }

    public static void setSamples(TreeSet<Float> z) {

        z.add(50F);
        z.add(51.5F);
        z.add(5.8F);
        z.add(3.9F);
        z.add(9.8F);
        z.add(7.5F);
        z.add(6.8F);
        z.add(100F);
        System.out.println("HashSet Size: " + z.size());
        System.out.println("Elements in HashSet: " + z);
        System.out.print("Using iterator : ");
        Iterator<Float> iterator = z.iterator();
        while (iterator.hasNext())
            System.out.print(iterator.next() + " ");
        System.out.println();
        System.out.print("Using enhanced for loop : ");
        for (Float element : z) {
            if (element > 20) {
                System.out.print(element + " ");
            }
        }
        z.remove("B");
        System.out.println("\nHashSet after removing element : " + z);

    }




}