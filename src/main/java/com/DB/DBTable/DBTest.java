package com.DB.DBTable;


import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.DB.DBTable.company.Company;

@RestController
public class DBTest{
    Company company = new Company();
    public static List<String> temp;
    @GetMapping("table")
    public List<String> Test(){
        return company.getResult("employee");
    }
    @PostMapping("/api/search")
    public void search(@RequestBody List<String> Input) throws SQLException, Exception {
        temp = Input;
   }
    @GetMapping("/api/search/value")
    public List<String> searchValue() throws SQLException, Exception {
        return company.Search(temp);
    }

    @PostMapping("/api/insert")
    public void insert(@RequestBody HashMap<String,String> Input) throws SQLException, Exception {
        company.Insert(Input);
    }

    @PostMapping("/api/delete")
    public void delete(@RequestBody String Input) throws SQLException, Exception {
        String query = Input.substring(0, Input.length() - 1);
        company.Delete(query);
    }

    @PostMapping("/api/update")
    public void update(@RequestBody HashMap<String,String> Input) throws SQLException, Exception {
        System.out.println(Input);
        company.Update(Input);
    }

}