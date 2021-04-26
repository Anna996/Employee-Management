package com.example.employee_example.employee;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee,Integer> {

    List<Employee> findByFirstname(String firstName); // Query DSL

    List<Employee> findByLastname(String lastName);
}
