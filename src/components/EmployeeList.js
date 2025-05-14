import React from 'react';
import './EmployeeForm.css';

export default function EmployeeList({ employees }) {
  if (employees.length === 0) {
    return <p className="no-employees">No employees added yet.</p>;
  }
  return (
    <div className="employee-list">
      <h3>Saved Employees</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Position</th><th>Department</th><th>Email</th><th>Start Date</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, i) => (
            <tr key={i}>
              <td>{emp.name}</td>
              <td>{emp.position}</td>
              <td>{emp.department}</td>
              <td>{emp.email}</td>
              <td>{emp.startDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
