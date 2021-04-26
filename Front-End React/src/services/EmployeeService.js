import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/";

/**
 * This class connects with the spring-boot server,
 * with the help of the 'axios' library.
 */

class EmployeeService {
  // GET : =======================================================
  getAllEmployees = async () => {
    const fullUrl = EMPLOYEE_API_BASE_URL + "allEmployees";
    return await axios.get(fullUrl);
  };

  getEmployeeByID = async (employeeId) => {
    // if employeeId is a number:
    if (/^\d+$/.test(employeeId)) {
      const fulUrl = EMPLOYEE_API_BASE_URL + `employee/${employeeId}`;
      return await axios.get(fulUrl, { id: employeeId });
    } else {
      alert("ID must be a number");
      return null;
    }
  };

  getEmployeeByFirstName = async (employeeFirstName) => {
    const fulUrl =
      EMPLOYEE_API_BASE_URL + `employee/firstName/${employeeFirstName}`;
    return await axios.get(fulUrl, { firstName: employeeFirstName });
  };

  getEmployeeByLastName = async (employeeLastName) => {
    const fulUrl =
      EMPLOYEE_API_BASE_URL + `employee/lastName/${employeeLastName}`;
    return await axios.get(fulUrl, { lastName: employeeLastName });
  };

  // POST : =======================================================

  addEmployee(employee) {
    const fulUrl = EMPLOYEE_API_BASE_URL + "employee";
    return axios.post(fulUrl, employee);
  }

  // PUT : =======================================================

  updateEmployee(employee) {
    const fulUrl = EMPLOYEE_API_BASE_URL + "employee";
    return axios.put(fulUrl, employee);
  }

  // DELETE : =======================================================

  deleteEmployee(employeeId) {
    const fulUrl = EMPLOYEE_API_BASE_URL + `employee/${employeeId}`;
    return axios.delete(fulUrl, { id: employeeId });
  }
}

export default new EmployeeService();
