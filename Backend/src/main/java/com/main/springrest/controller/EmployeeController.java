package com.main.springrest.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.main.springrest.model.Employee;
import com.main.springrest.service.EmployeeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class EmployeeController {
	
        @Autowired
        EmployeeService empService;
        
      
        @GetMapping("/welcome")
        public String show() {
        	return "welcome to application";
        }
        
      
        @PostMapping("/employees")
        public Employee createEmployee(@RequestBody Employee emp) {
            return empService.createEmployee(emp);
        }
        
      
        @GetMapping("/employees")
        public List<Employee> readEmployees() {
            return empService.getEmployees();
        }
        
      
        @GetMapping("/employees/{empId}")
        public Optional<Employee> readEmployees(@PathVariable(value = "empId") Long id) {
            return empService.getEmployeesById(id);
        }
        
      
        @PutMapping("/employees/{empId}")
        public Employee readEmployees(@PathVariable(value = "empId") Long id, @RequestBody Employee empDetails) {
            return empService.updateEmployee(id, empDetails);
        }
        
      
        @DeleteMapping("/employees/{empId}")
        public void deleteEmployees(@PathVariable(value = "empId") Long id) {
            empService.deleteEmployee(id);
        }

        

}
