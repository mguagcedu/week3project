import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/employeeSlice';

function EmployeeForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    department: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.position || !formData.department) {
      alert("All fields are required.");
      return;
    }
    dispatch(addEmployee(formData));
    setFormData({ name: '', position: '', department: '' });
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>Add New Employee</h2>
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="Name"
        onChange={handleChange}
      /><br />
      <input
        type="text"
        name="position"
        value={formData.position}
        placeholder="Position"
        onChange={handleChange}
      /><br />
      <input
        type="text"
        name="department"
        value={formData.department}
        placeholder="Department"
        onChange={handleChange}
      /><br />
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;
