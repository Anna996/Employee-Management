import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import EmployeeService from "../services/EmployeeService";

function UpdateBtn({ data, handleRefreshList }) {
  const [id, setId] = useState(data.id);
  const [firstName, setFirstName] = useState(data.firstname);
  const [lastName, setLastName] = useState(data.lastname);
  const [show, setShow] = useState(false);

  // Shows the modal.
  const handleShow = () => setShow(true);

  // Closes the modal.
  const handleClose = () => setShow(false);

  /**
   * Asks the server to update the data of current employee in the database.
   * closes the modal and ask to refresh the table to see the updated data.
   */
  const handleUpdate = (e) => {
    e.preventDefault();

    if (isAllInputsWasFilled()) {
      setShow(false);
      const currentEmployee = {
        id,
        firstname: firstName,
        lastname: lastName,
      };

      EmployeeService.updateEmployee(currentEmployee)
        .then((res) => {
          handleRefreshList();
        })
        .catch((err) => alert(err));
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
      <button className="btn btn-primary btn-sm" onClick={handleShow}>
        update
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">ID</label>
              <input
                type="text"
                value={id}
                className="form-control col-sm-6"
                onChange={(e) => setId(e.target.value)}
              ></input>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">First name</label>
              <input
                type="text"
                value={firstName}
                className="form-control col-sm-6"
                onChange={(e) => setFirstName(e.target.value)}
              ></input>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Last name</label>
              <input
                type="text"
                value={lastName}
                className="form-control col-sm-6"
                onChange={(e) => setLastName(e.target.value)}
              ></input>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-primary"
            type="submit"
            variant="primary"
            onClick={(e) => handleUpdate(e)}
          >
            Update
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

export default UpdateBtn;
