import java.sql.*;

public class JdbcCrudOperationsTestClass {
    static String url = "jdbc:mysql://localhost:3306/abcd";
    static String username = "root";
    //Give the password to access MySQL server
    static String password = "Dvr1972!";

    public static void main(String[] args) throws SQLException {
//        selectRecords();
        selectColumnFromRecords();
        //  selectRecordsWithCondition();
        //selectRecordsWithExternalParameters(24);
        //  selectRecordsWithPreparedStatement(18);
//        insertRecord();
        // insertRecordWithVariables(18,"SP",780000);
        // insertRecordWithPreparedStatement(11,"MDH",670000);
        //deleteRecord();
        //deleteRecordWithVariables(22);
        //deleteRecordWithPreparedStatement(15);
        // updateRecord();
        // updateRecordWithVariables(18, 850000);
        //updateRecordWithPreparedStatement(17, 880000);
    }

//    public static void insertRecord() throws SQLException {
//
//        String query = "insert into friends values(1, 'raj','95000','ccc');";
//        Connection connect = DriverManager.
//                getConnection(url, username, password);
//        Statement st = connect.createStatement();
//        int row = st.executeUpdate(query);
//        System.out.println("Number of rows affected:"
//                + row);
//        connect.close();
//    }
//
//}


    public static void selectColumnFromRecords() throws SQLException {

        String query = "select id, name, price from product";
        //Step 1 - connect database
        Connection connection = DriverManager.
                getConnection(url, username, password);
        //Step 2 - Creating statement
        Statement stmt = connection.createStatement();
        //Step 3 - Executing query and Processing resultset
        ResultSet rs = stmt.executeQuery(query);
        while (rs.next()) {
            System.out.print("\nId is:" + rs.getInt(1));
            System.out.print("\nName is:" + rs.getString(2));
            System.out.print("\nPrice is:" + rs.getDouble(3));
        }
        //Step 4 - Close connection
        connection.close();
    }
}
