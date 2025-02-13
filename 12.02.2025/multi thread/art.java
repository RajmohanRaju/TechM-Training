public class art {

    public static void main(String[] args)
        {
            ThreadOne t1 = new ThreadOne();
            t1.start();

            ThreadTwo t2 = new ThreadTwo();
            t2.start();

            ThreadThree t3 = new ThreadThree();
            t3.start();

            ThreadRunnableOne t4 = new ThreadRunnableOne();
            t4.run();


        }



    }
    class ThreadOne extends Thread
    {
        public void run()
        {
            System.out.println("hey there");
            System.out.println("how r you");
            System.out.println("have fun ");


        }
    }
    class ThreadTwo extends Thread
    {
        public void run()
        {
            System.out.println("this is from 2");
            System.out.println("have some");
            System.out.println(10/0);


        }
    }

class ThreadThree extends Thread
{
    public void run()
    {
        System.out.println("this is from 3");
        System.out.println("have you");
        System.out.println("this is from 3");
        System.out.println("this is from 3");
        System.out.println("this is from 3");



    }
}

class ThreadRunnableOne implements Runnable
{
    public void run()
    {
        System.out.println("this is from 3");
        System.out.println("have you");

    }
}




