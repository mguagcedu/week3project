import React from 'react';
import { useSelector } from 'react-redux';

function EmployeeList() {
  const employees = useSelector((state) => state.employee.employees);

  return (
    <div className="employee-table">
      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <p>No employees added yet.</p>
      ) : (
        <ul>
          {employees.map((emp, index) => (
            <li key={index}>
              <strong>{emp.name}</strong> - {emp.position} ({emp.department})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EmployeeList;
