import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const [department, setDepartment] = useState('');
  const [position, setPosition] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/employee') // Replace with your actual backend URL
      .then((response) => {
        setEmployees(response.data); // Set employees state with the response data
      })
      .catch((error) => {
        console.error('Error fetching employees:', error); 
      });
  }, []);

  return (
    <div>
      <h3>Employee List</h3>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by Department or Position"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => { setDepartment(search); setPosition(search); }} className="btn btn-primary mt-2">
          Search
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.first_name}</td>
              <td>{employee.last_name}</td>
              <td>{employee.email}</td>
              <td>{employee.department}</td>
              <td>{employee.position}</td>
              <td>{employee.salary}</td>
              <td>
                <Link to={`/employees/${employee._id}`} className="btn btn-info btn-sm">View</Link>
                <Link to={`/employees/update/${employee._id}`} className="btn btn-warning btn-sm">Update</Link>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/employees/add" className="btn btn-success">Add Employee</Link>
    </div>
  );
};

export default EmployeeList;
