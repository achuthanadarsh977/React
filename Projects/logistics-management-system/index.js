import React, { useState } from 'react';
import Swal from 'sweetalert2';

import employeedata  from '../../data/';
import Header from './Header';
import Add from './Add';
import Edit from './Edit';
import List from './List';

function DashBoard() {

    const [employees, setEmployees] = useState(employeedata);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (employee) => {
        setSelectedEmployee(employee);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: 'You will not be able to recover this!',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
        }).then(result => {
            if (result.isConfirmed) {
                setEmployees(employees.filter(emp => emp.id !== id));
                Swal.fire('Deleted!', 'Employee has been deleted.', 'success');
            }
        });
    };

    return (
        <div className="container">
            {!isAdding && !isEditing && (
                <>
                    <Header setIsAdding={setIsAdding} />
                    <List
                        employees={employees}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}

            {isAdding && (
                <Add
                    employees={employees}
                    setEmployees={setEmployees}
                    setIsAdding={setIsAdding}
                />
            )}

            {isEditing && (
                <Edit
                    employees={employees}
                    selectedEmployee={selectedEmployee}
                    setEmployees={setEmployees}
                    setIsEditing={setIsEditing}
                />
            )}
        </div>
    );
}

export default DashBoard;
