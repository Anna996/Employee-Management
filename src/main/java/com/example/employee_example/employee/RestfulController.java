package com.example.employee_example.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
@CrossOrigin
public class RestfulController {

    @Autowired
    private EmployeeRepository repository;

    @GetMapping("allEmployees")
    public List<Employee> getAllEmployees(){
        return repository.findAll();
    }

    @PostMapping("employee")
    public Employee createNewEmployee(@RequestBody Employee employee){
        repository.save(employee);
        return employee;
    }
    
    @DeleteMapping("employee/{id}")
    public Employee deleteEmployee(@PathVariable("id") Integer id){
        Employee employee = repository.findById(id).orElse(null);
        if(employee != null ) repository.deleteById(id);
        return employee;
    }

    @PutMapping("employee")
    public Employee updateEmployee(@RequestBody Employee employee){
        Employee curr = repository.findById(employee.getId()).orElse(null);
        if(curr != null) {
            curr.setFirstname(employee.getFirstname());
            curr.setLastname(employee.getLastname());
            repository.save(curr);
        }
        return curr;
    }

    @GetMapping("employee/{id}")
    public Employee getEmployeeById(@PathVariable("id") int id){
        return repository.findById(id).orElse(null);
    }

    @GetMapping("employee/firstName/{firstName}")
    public List<Employee> getEmployeeByFirstName(@PathVariable("firstName") String firstName){
        return repository.findByFirstname(firstName);
    }

    @GetMapping("/employee/lastName/{lastName}")
    public List<Employee> getEmployeeByLastName(@PathVariable("lastName") String lastName){
        return repository.findByLastname(lastName);
    }
}
