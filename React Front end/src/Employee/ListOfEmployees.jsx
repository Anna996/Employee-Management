import React, { useState, useEffect } from "react";
import EmployeeService from "../services/EmployeeService";
import "./ListOfEmployees.css";
import UpdateBtn from "./UpdateBtn";

function ListOfEmployees({ specificData, refreshList, handleRefreshList }) {
  const [employees, setEmployees] = useState([]);

  const handleResultLength = (res) => {
    if (res.data instanceof Array) setEmployees(res.data);
    else setEmployees([res.data]);
  };

  // Asks the server to delete the current employee from the database.
  const handleDelete = (e) => {
    const id = e.target.id;
    EmployeeService.deleteEmployee(id)
      .then(() => handleRefreshList())
      .catch((err) => alert(err));
  };

  /**
   * Each time 'specificData' or 'refreshList' are changed,
   * the list component is being refreshed.
   */
  useEffect(() => {
    const selecteType = specificData.type;
    const input = specificData.input;
    let result;
    let hasResult = true;

    switch (selecteType) {
      case "allEmployees":
        result = EmployeeService.getAllEmployees();
        break;
      case "id":
        result = EmployeeService.getEmployeeByID(input);
        break;
      case "firstname":
        result = EmployeeService.getEmployeeByFirstName(input);
        break;
      case "lastname":
        result = EmployeeService.getEmployeeByLastName(input);
        break;
      default:
        hasResult = false;
    }

    if (hasResult) {
      result
        .then((res) => {
          if (res != null) handleResultLength(res);
        })
        .catch((err) => alert(err));
    }
  }, [specificData, refreshList]);

  return (
    <div className="ListOfEmployees">
      <table className="ListOfEmployees__table ">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {employees.map((data) => (
            <tr>
              <td> {data.id}</td>
              <td>{data.firstname}</td>
              <td>{data.lastname}</td>
              <td>
                <UpdateBtn
                  key={data.id}
                  data={data}
                  handleRefreshList={handleRefreshList}
                />
              </td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  key={data.id}
                  id={data.id}
                  onClick={(e) => handleDelete(e)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListOfEmployees;
