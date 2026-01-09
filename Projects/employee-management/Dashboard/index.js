import React, { useState } from 'react';
import Swal from 'sweetalert2';

import employeedata from '../../data/';
import Header from './Header';
import Add from './Add';
import Edit from './Edit';
import List from './List';

function DashBoard() {

    const [employees, setEmployees] = useState(employeedata);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    // ✅ Edit handler
    const handleEdit = (id) => {
        const employee = employees.find(emp => emp.id === id);
        setSelectedEmployee(employee);
        setIsEditing(true);
    };

    // ✅ Delete handler
    const handleDelete = (id) => {
    Swal.fire({
        title: 'Are you sure?',
        text: 'This employee will be permanently deleted.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            // Delete only the one employee with the matching unique ID
            setEmployees(prev => prev.filter(emp => emp.id !== id));

            Swal.fire({
                icon: 'success',
                title: 'Deleted!',
                text: 'Employee data has been deleted.',
                timer: 1500,
                showConfirmButton: false
            });
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
