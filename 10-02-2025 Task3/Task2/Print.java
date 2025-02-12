public class Print {
    public static void print() {
        System.out.print("starting of the program");
        System.out.print("Keep executing without breaking the flow.");
    }

    public static void println() {
        System.out.println("Switching with println for a fresh start.");
        System.out.println("Ending the sequence with a final println call.");
    }

    public void error() {
        System.err.print("Caution: Minor anomaly detected in execution!");
        System.err.println("System failure imminent! Take immediate action.");
    }
}
