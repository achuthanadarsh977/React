import React, { useState } from 'react';
import Swal from 'sweetalert2';

import shipmentData from './../data/logisticsdata';

import Add from "./Add";
import Header from "./Header";
import Edit from "./Edit";
import List from "./List";

function Dashboard() {
  const [shipments, setShipments] = useState(shipmentData);

  const [selectedShipment, setSelectedShipment] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (shipment) => {
    setSelectedShipment(shipment);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: 'You will not be able to recover this',
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        setShipments(shipments.filter(sh => sh.id !== id));
        Swal.fire('Deleted', 'Shipment has been deleted', 'success');
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />
          <List
            shipments={shipments}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}

      {isAdding && (
        <Add
          shipments={shipments}
          setShipments={setShipments}
          setIsAdding={setIsAdding}
        />
      )}

      {isEditing && (
        <Edit
          shipments={shipments}
          selectedShipment={selectedShipment}
          setShipments={setShipments}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}

export default Dashboard;
