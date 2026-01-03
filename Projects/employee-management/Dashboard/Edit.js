
import React, { useState } from 'react';
import Swal from 'sweetalert2';


function Edit({employees , selectedEmployee , setEmployees , setIsEditing}){

    const id = selectedEmployee.id;

    const [name, setName] = useState(selectedEmployee.name);
    const [email, setEmail] = useState(selectedEmployee.email);
    const [gender, setGender] = useState(selectedEmployee.gender);
    const [date, setDate] = useState(selectedEmployee.date);
    const [salary, setSalary] = useState(selectedEmployee.salary);

    const handleUpdate = (e) => {
        e.preventDefault();

        if (!name || !email || !gender || !date || !salary) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
            });
        }

        const updatedEmployee = {
            id,
            name,
            email,
            gender,
            date,
            salary,
        };

        const updatedEmployees = employees.map(emp =>
            emp.id === id ? updatedEmployee : emp
        );

        setEmployees(updatedEmployees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${name}'s data has been updated.`,
            timer: 1500,
            showConfirmButton: false
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Employee</h1>

                <label>Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <label>Gender</label>
                <select
                    value={gender}
                    onChange={e => setGender(e.target.value)}
                >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                <label>Date</label>
                <input
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />

                <label>Salary ($)</label>
                <input
                    type="number"
                    value={salary}
                    onChange={e => setSalary(e.target.value)}
                />

                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        type="button"
                        value="Cancel"
                        className="muted-button"
                        style={{ marginLeft: '12px' }}
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );



}


export default Edit
