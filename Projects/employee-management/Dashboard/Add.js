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
            timer: 1500,
            showConfirmButton: false
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
                    onChange={e => setName(e.target.value)}
                />

                <label>Gender</label>
                <input
                    type="text"
                    value={gender}
                    onChange={e => setGender(e.target.value)}
                />

                <label>Blood Group</label>
                <input
                    type="text"
                    value={bloodgroup}
                    onChange={e => setBloodgroup(e.target.value)}
                />

                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <label>Salary ($)</label>
                <input
                    type="number"
                    value={salary}
                    onChange={e => setSalary(e.target.value)}
                />

                <label>Date</label>
                <input
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />

                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        type="button"
                        value="Cancel"
                        className="muted-button"
                        style={{ marginLeft: '12px' }}
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add;
