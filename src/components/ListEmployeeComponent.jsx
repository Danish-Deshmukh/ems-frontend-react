import React, { useEffect, useState } from "react";
import { listEmployees, deleteEmployee } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

export default function ListEmployeeComponent() {
  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();
  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const addNewEmployee = () => {
    navigator("/add-employee");
  };
  const updateEmployee = (id) => {
    navigator(`/update-employee/${id}`);
  };
  const deleteEmploye = (id) => {
    console.log(id);

    deleteEmployee(id)
      .then((response) => {
        getAllEmployees();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="container">
      <h1>List of Employees</h1>

      <button
        className="btn btn-info mt-5 mb-3"
        onClick={() => addNewEmployee()}
      >
        ADD EMPLOYEE
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.email}</td>
              <td>
                <button
                  onClick={() => updateEmployee(emp.id)}
                  className="btn btn-info m-1"
                >
                  Update
                </button>
                <button
                  onClick={() => deleteEmploye(emp.id)}
                  className="btn btn-danger m-1 "
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
