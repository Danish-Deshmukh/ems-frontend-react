import { Button } from "bootstrap";
import React, { useState } from "react";
import { createEmployee } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

export default function EmployeeComponenet() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  
  
  function saveEmployee(e) {
    e.preventDefault();
  
    const employee = { firstName, lastName, email };
    console.log(employee);

    createEmployee(employee).then((respone) => {
  
      console.log(respone.data);
      navigate("/employees");
    });
  }
  return (
    <div className="container  d-flex justify-content-center bg-secondary">
      <div className="card border-success  w-50 p-3">
        <h2 className="text">Add Employee</h2>
        <div className="card-body">
          <form action="">
            <div className="form-group mb-2">
              <label className="form-label d-flex start">First Name:</label>
              <input
                type="text"
                placeholder="Enter Employees first Name"
                name="firstName"
                value={firstName}
                className="form-control mb-2 border-success"
                onChange={(text) => setFirstName(text.target.value)}
              />
              <label className="form-label d-flex start">Last Name:</label>
              <input
                type="text"
                placeholder="Enter Employees Last Name"
                name="lastName"
                value={lastName}
                className="form-control mb-2 border-success"
                onChange={(text) => setLastName(text.target.value)}
              />
              <label className="form-label d-flex start">Email Address:</label>
              <input
                type="email"
                placeholder="Enter Employees Email Address"
                name="email"
                value={email}
                className="form-control mb-2 border-success"
                onChange={(text) => setEmail(text.target.value)}
              />
              <button
                title="ADD EMPLOYEE"
                className="btn btn-info mt-5 mb-3 "
                onClick={saveEmployee}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
