package com.main.springrest.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.main.springrest.dao.EmployeeRepository;
import com.main.springrest.model.Employee;

@Service
public class EmployeeService {

	@Autowired
	EmployeeRepository empRepository;
	
	// CREATE 
	public Employee createEmployee(Employee emp) {
	    return empRepository.save(emp);
	}

	// READ
	public List<Employee> getEmployees() {
	    return empRepository.findAll();
	}

	// READ BY ID
	public Optional<Employee> getEmployeesById(long id) {
	    return empRepository.findById(id);
	}

	// DELETE
	public void deleteEmployee(Long empId) {
	    empRepository.deleteById(empId);
	}
	 
	// UPDATE
	public Employee updateEmployee(Long empId, Employee employeeDetails) {
	        Employee emp = empRepository.findById(empId).get();
	        emp.setFirstName(employeeDetails.getFirstName());
	        emp.setLastName(employeeDetails.getLastName());
	        emp.setEmailId(employeeDetails.getEmailId());
	        
	        return empRepository.save(emp);                                
	}


}
