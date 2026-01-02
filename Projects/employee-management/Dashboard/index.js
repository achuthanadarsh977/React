
import React, { useState } from 'react'
import Swal from 'sweetalert2';

import {employeedata}  from '../../data/';
import Header from './Header'
import Add from './Add';
import Edit from './Edit';
import List from './List';

function DashBoard(){

    const [employees , setEmployees] = useState(employeedata)
    const [selectedEmployee , setselectedEmployee ]  = useState(null)
    const [isAdding ,setIsAdding ] = useState(false)

    const [isEditing , setIsEditing] = useState(false)

    const handleEdit = () => {

    }

    const handleDelete = () => {

    }


    return(
        <div class = "container">
            {
                !isAdding && !isEditing && (
                    <>
                    <Header setIsAdding = {setIsAdding}/>
                    <List
                      employees = {employees}
                      handleEdit = {handleEdit}
                      handleDelete = {handleDelete}
                      />

                      </>

                ) 
            }
            {}
            {isAdding && (
                <Add 
                 employees = {employees}
                 setEmployees = {setEmployees}
                 setIsAdding = {setIsAdding}
                />
            )}
        </div>
    )
}

export default DashBoard
