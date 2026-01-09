import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';

function Add({ employees, setEmployees, setIsAdding }) {

    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [bloodgroup, setBloodgroup] = useState('');
    const [email, setEmail] = useState('');
    const [salary, setSalary] = useState('');
    const [date, setDate] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, []);

    const handleAdd = (e) => {
        e.preventDefault();

        if (!name || !gender || !bloodgroup || !email || !salary || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const newEmployee = {
            id: employees.length + 1,
            name,
            gender,
            bloodgroup,
            email,
            salary: Number(salary),
            date
        };

        setEmployees([...employees, newEmployee]);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${name}'s data has been added.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Employee</h1>

                <label>Name</label>
                <input
                    type="text"
                    ref={textInput}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label>Gender</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>

                <label>Blood Group</label>
                <select value={bloodgroup} onChange={(e) => setBloodgroup(e.target.value)}>
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                </select>

                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Salary</label>
                <input
                    type="number"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                />

                <label>Date</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />

                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        type="button"
                        className="muted-button"
                        value="Cancel"
                        style={{ marginLeft: '12px' }}
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add;
