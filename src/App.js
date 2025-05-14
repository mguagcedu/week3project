import React, { useState, useEffect } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import './components/EmployeeForm.css';

function App() {
  const [employees, setEmployees] = useState([]);

  // Load saved employees from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('employees');
    if (stored) setEmployees(JSON.parse(stored));
  }, []);

  // Save to localStorage whenever employees change
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee) => {
    setEmployees(prev => [...prev, employee]);
  };

  return (
    <div className="form-container">
      <h2>New Employee Form</h2>
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeList employees={employees} />
    </div>
  );
}

export default App;
