

import React, { useState } from 'react'
import Swal from 'sweetalert2';

import shipmentData from './../data/logisticsdata';

import Add from "./Add";

import Header from "./Header";

import Edit from "./Edit";

import List from "./List";

import './index.css';


function Dashboard(){
    const [logistics , setlogistics] = useState(shipmentData)
    
    const [selectedLogistics , setselectedlogistics ] = useState(null)

    const [ isAdding , setIsAdding] = useState(false)

    const [ isEditing , setIsEditing] = useState(false)

    const handleEdit = () =>{


    }

    const handleDelete = (id) => {

        Swal.fire({
            icon:'warning',
            title:'Are you sure?',
            text:'You will not be able to recover this',
            showCancelButton:true,
            confirmButtonText:

        })

    }


    return(
        <div class = "container">
            {
                !isAdding && !isEditing  && (
                    <>
                    <Header setIsAdding={setIsAdding}/>
                    <List
                      logistics = {logistics}
                      handleEdit = {handleEdit}
                      handleDelete = {handleDelete}
                      />
                    </>
                )
            }

            {}
            {isAdding && (
                <Add
                 logistics={logistics}
                 setlogistics={setlogistics}
                 setIsAdding={setIsAdding}
                />
            )}
        </div>
    )
}

export default Dashboard