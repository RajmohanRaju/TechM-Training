import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Scanner;

public class Methods {

    public static void useBufferedReader() throws Exception {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        System.out.print("Please provide input using BufferedReader: ");
        String input = reader.readLine();
        System.out.println("You have entered: " + input);
    }

    public static void useScanner() {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter a text value: ");
        String text = scanner.nextLine();
        System.out.println("Received text: " + text);

        System.out.print("Enter an integer value: ");
        int number = scanner.nextInt();
        System.out.println("Received integer: " + number);

        System.out.print("Enter a decimal number: ");
        float decimal = scanner.nextFloat();
        System.out.println("Received decimal: " + decimal);
    }
}
