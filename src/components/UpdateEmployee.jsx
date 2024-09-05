import React, { useEffect, useState } from "react";
import { createEmployee, getEmployee, updateEmployee } from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateEmployee() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getEmployee(id).then((response) => {
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmail(response.data.email)
        }).catch(e => {
            console.log(e)
        })
    },[id])
    
    function update(e) {
      e.preventDefault();
    
      const employee = { firstName, lastName, email };
      console.log(employee);
  
      updateEmployee(id, employee).then((respone) => {
    
        console.log(respone.data);
        navigate("/employees");
      });
    }
  return (
    <div className="container  d-flex justify-content-center bg-secondary">
    <div className="card border-success  w-50 p-3">
      <h2 className="text">Update Employee</h2>
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
              onClick={update}
            >
              UPDATE
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
