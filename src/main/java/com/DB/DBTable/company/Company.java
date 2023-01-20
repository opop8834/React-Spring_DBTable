package com.DB.DBTable.company;


import java.sql.*;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.Date;

import com.DB.DBTable.Password;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

public class Company {
    private static final String url = "jdbc:mysql://localhost:3306/mydb?serverTimeZone=UTC";
    private static final String user = "root";
    private static String password = new Password().getPassword();

    public List<String> getResult(String query){
        Connection conn = null;
        ResultSet rs;
        List<String> list = new ArrayList<String>();
        String sql = "SELECT * FROM " + query;
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
        }
        catch(ClassNotFoundException e) {
            System.err.println("jdbc load error" + e.getMessage());
            e.printStackTrace();
        }

        try {
            conn = DriverManager.getConnection(url, user, password);
            System.out.println("Connect");
            PreparedStatement p = conn.prepareStatement(sql);
            rs = p.executeQuery();
            String fname, minit,lname,ssn,Bdata,address,sex,salary,super_ssn,dno,created,modified;
            while (rs.next()) {
                fname = rs.getString(1);
                minit = rs.getString(2);
                lname = rs.getString(3);
                ssn = rs.getString(4);
                Bdata = rs.getString(5);
                address = rs.getString(6);
                sex = rs.getString(7);
                salary = rs.getString(8);
                super_ssn = rs.getString(9);
                dno = rs.getString(10);
                created = rs.getString(11);
                modified = rs.getString(12);

                list.add(isString(fname));
                list.add(isString(minit));
                list.add(isString(lname));
                list.add(isString(ssn));
                list.add(isString(Bdata));
                list.add(isString(address));
                list.add(isString(sex));
                list.add(isString(salary));
                list.add(isString(super_ssn));
                list.add(isString(dno));
                list.add(isString(created));
                list.add(isString(modified));

            }
        } catch (SQLException e) {
            System.err.println("error connect" + e.getMessage());
            e.printStackTrace();
        }
        try {
            if(conn != null)
                conn.close();
        } catch (SQLException e) {}
        return list;
    }

    public String isString(String str){
        if(str == null)
        {
            str="null";
        }
        return str;
    }
    public List<String> Search(List<String> query) {
        List<String> list = new ArrayList<String>();
        List<String> listquery = new ArrayList<String>();
        Connection conn = null;
        ResultSet rs;
        String temp = "";
        for(int i =0; i<query.size()-1 ; i++)
        {
            temp += query.get(i);
            listquery.add(query.get(i));
            if (i < query.size()-2)
            {
                temp += ",";
            }
        }
        if (temp.equals(""))
        {
            list.add("check the columns");
            return list;
        }
        String name = query.get(query.size()-1);
        String sql = "SELECT " + temp + " FROM EMPLOYEE WHERE Fname=?";
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
        }
        catch(ClassNotFoundException e) {
            System.err.println("jdbc load error" + e.getMessage());
            e.printStackTrace();
        }

        try {
            conn = DriverManager.getConnection(url, user, password);
            System.out.println("Connect");
            PreparedStatement p = conn.prepareStatement(sql);
            p.clearParameters();

            p.setString(1, name);
            rs = p.executeQuery();
            String fname, minit,lname,ssn,Bdata,address,sex,salary,super_ssn,dno,created,modified;
            while (rs.next()) {

                if(listquery.contains("Fname")) {
                    fname = rs.getString(listquery.indexOf("Fname")+1);
                    list.add(isString(fname));
                }
                if(listquery.contains("Minit")) {
                    minit = rs.getString(listquery.indexOf("Minit")+1);
                    list.add(isString(minit));
                }
                if(listquery.contains("Lname")) {
                    lname = rs.getString(listquery.indexOf("Lname")+1);
                    list.add(isString(lname));
                }
                if(listquery.contains("Bdate")) {
                    Bdata = rs.getString(listquery.indexOf("Bdate")+1);
                    list.add(isString(Bdata));
                }
                if(listquery.contains("Address")){
                    address = rs.getString(listquery.indexOf("Address")+1);
                    list.add(isString(address));
                }
                if(listquery.contains("Sex")){
                    sex = rs.getString(listquery.indexOf("Sex")+1);
                    list.add(isString(sex));
                }
                if(listquery.contains("Salary")) {
                    salary = rs.getString(listquery.indexOf("Salary")+1);
                    list.add(isString(salary));
                }
                if(listquery.contains("Super_ssn")) {
                    super_ssn = rs.getString(listquery.indexOf("Super_ssn")+1);
                    list.add(isString(super_ssn));
                }
                if(listquery.contains("Dno")) {
                    dno = rs.getString(listquery.indexOf("Dno")+1);
                    list.add(isString(dno));
                }
                if(listquery.contains("Ssn")){
                    ssn = rs.getString(listquery.indexOf("Ssn")+1);
                    list.add(isString(ssn));
                }
                System.out.println(list);
            }

        } catch (SQLException e) {
            System.err.println("cant search");
            e.printStackTrace();
        }

        try {
            if (conn != null)
                conn.close();
        } catch (SQLException e) {

        }
        return list;
    }

    public void Insert(HashMap<String,String> query) {
        Connection conn = null;
        DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date currentTime = Calendar.getInstance().getTime();
        String currentTimeString = df.format(currentTime);
        query.put("Created", currentTimeString);
        query.put("Modified", currentTimeString);
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
        }
        catch(ClassNotFoundException e) {
            System.err.println("jdbc load error" + e.getMessage());
            e.printStackTrace();
        }

        try {
            conn = DriverManager.getConnection(url, user, password);
            System.out.println("Connect");
            String stmt1 = "INSERT INTO EMPLOYEE VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";;
            PreparedStatement p = conn.prepareStatement(stmt1);
            p.clearParameters();
            p.setString(1,query.get("Fname"));
            p.setString(2,query.get("Minit"));
            p.setString(3,query.get("Lname"));
            p.setString(4,query.get("Ssn"));
            p.setString(5,query.get("Bdate"));
            p.setString(6,query.get("Address"));
            p.setString(7,query.get("Sex"));
            p.setString(8,query.get("Salary"));
            p.setString(9,query.get("Super_ssn"));
            p.setString(10,query.get("Dno"));
            p.setString(11,query.get("Created"));
            p.setString(12,query.get("Modified"));

            p.executeUpdate();

        } catch (SQLException e) {
            System.err.println("cant insert query");
            e.printStackTrace();
        }

        try {
            if (conn != null)
                conn.close();
        } catch (SQLException e) {

        }
    }
    public void Delete(String query) {
        Connection conn = null;
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
        }
        catch(ClassNotFoundException e) {
            System.err.println("jdbc load error" + e.getMessage());
            e.printStackTrace();
        }

        try {
            conn = DriverManager.getConnection(url, user, password);
            System.out.println("Connect");
            String stmt = "DELETE FROM EMPLOYEE WHERE Ssn="+query;
            PreparedStatement p = conn.prepareStatement(stmt);
            p.executeUpdate();

        } catch (SQLException e) {
            System.err.println("Cant delete");
            e.printStackTrace();
        }

        try {
            if (conn != null)
                conn.close();
        } catch (SQLException e) {

        }
    }
    public void Update(HashMap<String,String> query) {
        Connection conn = null;
        List<String> keylist = new ArrayList<String>();
        List<String> valuelist = new ArrayList<String>();
        DateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date currentTime = Calendar.getInstance().getTime();
        String currentTimeString = df.format(currentTime);
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
        }
        catch(ClassNotFoundException e) {
            System.err.println("jdbc load error" + e.getMessage());
            e.printStackTrace();
        }

        try {
            conn = DriverManager.getConnection(url, user, password);
            System.out.println("Connect");
            String stmt = "UPDATE EMPLOYEE SET";
            int previousSsn = -99999;
            int tp = 0;
            int size = query.size();

            for (String keysum : query.keySet()) {
                int beginIndex = keysum.indexOf(",");
                int endIndex = keysum.length();
                int key = Integer.parseInt(keysum.substring(0,beginIndex));
                String value = query.get(keysum);

                int Ssn = Integer.parseInt(keysum.substring(beginIndex+1, endIndex));
                int digit = key / 12;
                if (key % 12 == 0){
                    stmt += " Fname = "+ "'" + value + "'";
                }
                else if (key % 12 == 1){
                    stmt += " Minit = "+ "'" + value + "'";
                }
                else if (key % 12 == 2){
                    stmt += " Lname = "+ "'" + value + "'";
                }
                else if (key % 12 == 4){
                    stmt += " Bdate = "+ "'" + value + "'";
                }
                else if (key % 12 == 5){
                    stmt += " Address = "+ "'" + value + "'";
                }
                else if (key % 12 == 6){
                    stmt += " Sex = "+ "'" + value + "'";
                }
                else if (key % 12 == 7){
                    stmt += " Salary = "+ value;
                }
                else if (key % 12 == 8){
                    stmt += " Super_ssn = "+ "'" + value + "'";
                }
                else if (key % 12 == 9){
                    stmt += " Dno = "+ value;
                }
                stmt += ", Modified = "+ "'" +currentTimeString+"'";
                stmt += " WHERE Ssn = "+ Ssn;
                size--;
                System.out.println(stmt);
                PreparedStatement p = conn.prepareStatement(stmt);
                p.executeUpdate();
                if (size <1)
                {
                    stmt="";
                }
                else {
                    stmt = "UPDATE EMPLOYEE SET";
                }
            }

        } catch (SQLException e) {
            System.err.println("Cant update");
            e.printStackTrace();
        }

        try {
            if (conn != null)
                conn.close();
        } catch (SQLException e) {

        }
    }


}
