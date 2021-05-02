import React, { useState } from "react";
import "./AddEmployeeBtn.css";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import EmployeeService from "../services/EmployeeService";

function AddEmployeeBtn({ handleRefreshList }) {
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Shows the modal.
  const handleShow = () => setShow(true);

  // Closes the modal and initializes the data.
  const handleClose = () => {
    setShow(false);
    setId("");
    setFirstName("");
    setLastName("");
  };

  /**
   * Asks the server to add the new employee to the database.
   * closes the modal and ask to refresh the table to see the updated data.
   */
  const handleSave = (e) => {
    e.preventDefault();

    if (isAllInputsWasFilled()) {
      setShow(false);
      const currentEmployee = {
        id,
        firstname: firstName,
        lastname: lastName,
      };

      EmployeeService.addEmployee(currentEmployee)
        .then((res) => {
          if (res.data == "") alert("The ID number already exists");
          else handleRefreshList();
        })
        .catch((error) => alert(error));
    }
  };

  // Alerts if not all the inputs were filled.
  const isAllInputsWasFilled = () => {
    if (id == "") alert("Please enter ID");
    else if (firstName == "") alert("Please enter first name");
    else if (lastName == "") alert("Please enter last name");
    else return true;

    return false;
  };

  return (
    <div>
      <button
        type="button"
        className=" addEmployeeBtn btn btn-info"
        onClick={handleShow}
      >
        Add New Employee
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create a new Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="addEmployeeBtn__form">
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">ID</label>
              <input
                type="text"
                className="form-control col-sm-6 "
                onChange={(e) => setId(e.target.value)}
              ></input>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">First name</label>
              <input
                type="text"
                className="form-control col-sm-6"
                onChange={(e) => setFirstName(e.target.value)}
              ></input>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Last name</label>
              <input
                type="text"
                className="form-control col-sm-6"
                onChange={(e) => setLastName(e.target.value)}
              ></input>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => handleSave(e)}
          >
            Save
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleClose}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddEmployeeBtn;
