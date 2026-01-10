import React from "react";

function List({ shipments, handleEdit, handleDelete }) {
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return (
    <div className="main-content">
      <h1>Shipment List</h1>

      <div className="table-container mt-2">
        <table className="striped-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Supplier Name</th>
              <th>PAN</th>
              <th>Trip ID</th>
              <th>Trip Date</th>
              <th>Billing To</th>
              <th>From</th>
              <th>To</th>
              <th>Loading Date</th>
              <th>Vehicle No</th>
              <th>Vehicle / Tonnage</th>
              <th>Freight ₹</th>
              <th>Advance ₹</th>
              <th>Other ₹</th>
              <th>Total Advance ₹</th>
              <th>Balance ₹</th>
              <th colSpan={2} className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {shipments && shipments.length > 0 ? (
              shipments.map((shipment, index) => (
                <tr key={shipment.id}>
                  <td>{index + 1}</td>
                  <td>{shipment.supplierName}</td>
                  <td>{shipment.supplierPan}</td>
                  <td>{shipment.tripId}</td>
                  <td>{shipment.tripDate}</td>
                  <td>{shipment.billingTo}</td>
                  <td>{shipment.fromLocation}</td>
                  <td>{shipment.toLocation}</td>
                  <td>{shipment.loadingDate}</td>
                  <td>{shipment.vehicleNumber}</td>
                  <td>{shipment.vehicleTypeTonnage}</td>
                  <td>{formatter.format(shipment.freightAmount)}</td>
                  <td>{formatter.format(shipment.advanceAmount)}</td>
                  <td>{formatter.format(shipment.otherCharges)}</td>
                  <td>{formatter.format(shipment.totalAdvanceAmount)}</td>
                  <td>{formatter.format(shipment.balanceAmount)}</td>
                  <td className="text-right">
                    <button
                      onClick={() => handleEdit(shipment)}
                      className="button muted-button"
                    >
                      Edit
                    </button>
                  </td>
                  <td className="text-left">
                    <button
                      onClick={() => handleDelete(shipment.id)}
                      className="button muted-button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="17" className="text-center">
                  No shipment records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List;
