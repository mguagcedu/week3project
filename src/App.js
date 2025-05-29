import ThemeToggle from "./components/ThemeToggle";
import './advancedForm.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Form</Link> | <Link to="/list">Employee List</Link>
      </nav>
<ThemeToggle />
      <Routes>
        <Route path="/" element={<EmployeeForm />} />
        <Route path="/list" element={<EmployeeList />} />
      </Routes>
    </div>
  );
}

export default App;
