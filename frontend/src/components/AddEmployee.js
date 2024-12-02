import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const navigate = useNavigate();
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');
  const [date_of_joining, setDateOfJoining] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEmployee = { first_name, last_name, email, position, salary, date_of_joining, department };
    try {
      await axios.post('http://localhost:3001/employee', newEmployee);
      navigate('/employees');
    } catch (err) {
      console.error('Error adding employee:', err);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Add Employee</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input type="text" className="form-control" value={first_name} onChange={(e) => setFirstName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" className="form-control" value={last_name} onChange={(e) => setLastName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Position</label>
            <input type="text" className="form-control" value={position} onChange={(e) => setPosition(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Salary</label>
            <input type="number" className="form-control" value={salary} onChange={(e) => setSalary(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Date of Joining</label>
            <input type="date" className="form-control" value={date_of_joining} onChange={(e) => setDateOfJoining(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Department</label>
            <input type="text" className="form-control" value={department} onChange={(e) => setDepartment(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary mt-3">Add Employee</button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
