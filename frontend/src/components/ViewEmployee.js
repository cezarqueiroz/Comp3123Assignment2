import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/employee/${id}`);
        setEmployee(res.data);
      } catch (err) {
        console.error('Error fetching employee:', err);
      }
    };

    fetchEmployee();
  }, [id]);

  return (
    <div className="card">
      <div className="card-body">
        {employee ? (
          <>
            <h5 className="card-title">Employee Details</h5>
            <p><strong>First Name:</strong> {employee.first_name}</p>
            <p><strong>Last Name:</strong> {employee.last_name}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Position:</strong> {employee.position}</p>
            <p><strong>Salary:</strong> {employee.salary}</p>
            <p><strong>Date of Joining:</strong> {employee.date_of_joining}</p>
            <p><strong>Department:</strong> {employee.department}</p>
          </>
        ) : (
          <p>Loading employee details...</p>
        )}
      </div>
    </div>
  );
};

export default ViewEmployee;
