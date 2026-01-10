import React, { useState } from 'react';
import Swal from 'sweetalert2';

function Edit({ shipments, selectedShipment, setShipments, setIsEditing }) {
  const shipment = selectedShipment || {};

  const [supplierName, setSupplierName] = useState(shipment.supplierName || '');
  const [supplierPan, setSupplierPan] = useState(shipment.supplierPan || '');
  const [tripId, setTripId] = useState(shipment.tripId || '');
  const [tripDate, setTripDate] = useState(shipment.tripDate || '');
  const [billingTo, setBillingTo] = useState(shipment.billingTo || '');
  const [fromLocation, setFromLocation] = useState(shipment.fromLocation || '');
  const [toLocation, setToLocation] = useState(shipment.toLocation || '');
  const [loadingDate, setLoadingDate] = useState(shipment.loadingDate || '');
  const [vehicleNumber, setVehicleNumber] = useState(shipment.vehicleNumber || '');
  const [vehicleTypeTonnage, setVehicleTypeTonnage] = useState(shipment.vehicleTypeTonnage || '');
  const [freightAmount, setFreightAmount] = useState(shipment.freightAmount || '');
  const [advanceAmount, setAdvanceAmount] = useState(shipment.advanceAmount || '');
  const [otherCharges, setOtherCharges] = useState(shipment.otherCharges || '');

  if (!selectedShipment) {
    return <div className="small-container">Select a shipment to edit</div>;
  }

  const { id } = selectedShipment;

  const isValidPAN = (value) => /^[A-Za-z0-9]{10}$/.test((value || '').trim());

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!isValidPAN(supplierPan)) {
      return Swal.fire({
        icon: 'error',
        title: 'Invalid PAN',
        text: 'PAN must be exactly 10 alphanumeric characters.',
        showConfirmButton: true
      });
    }

    const totalAdvanceAmount = Number(advanceAmount) + Number(otherCharges || 0);
    const balanceAmount = Number(freightAmount) - totalAdvanceAmount;

    const updatedShipment = {
      id,
      supplierName,
      supplierPan: supplierPan.toUpperCase(),
      tripId,
      tripDate,
      billingTo,
      fromLocation,
      toLocation,
      loadingDate,
      vehicleNumber,
      vehicleTypeTonnage,
      freightAmount: Number(freightAmount),
      advanceAmount: Number(advanceAmount),
      otherCharges: Number(otherCharges || 0),
      totalAdvanceAmount,
      balanceAmount,
    };

    setShipments(shipments.map((s) => (s.id === id ? updatedShipment : s)));
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated successfully',
      timer: 1200,
      showConfirmButton: false,
    });
  };

  // Auto-calculated values for display
  const totalAdvanceAmount = Number(advanceAmount) + Number(otherCharges || 0);
  const balanceAmount = Number(freightAmount) - totalAdvanceAmount;

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Shipment</h1>

        <label>Supplier Name</label>
        <input value={supplierName} onChange={(e) => setSupplierName(e.target.value)} />

        <label>Supplier PAN</label>
        <input
          value={supplierPan}
          onChange={(e) => setSupplierPan(e.target.value.toUpperCase())}
          maxLength={10}
          placeholder="10 alphanumeric"
        />

        <label>Trip ID</label>
        <input value={tripId} onChange={(e) => setTripId(e.target.value)} />

        <label>Trip Date</label>
        <input type="date" value={tripDate} onChange={(e) => setTripDate(e.target.value)} />

        <label>Billing To</label>
        <input value={billingTo} onChange={(e) => setBillingTo(e.target.value)} />

        <label>From Location</label>
        <input value={fromLocation} onChange={(e) => setFromLocation(e.target.value)} />

        <label>To Location</label>
        <input value={toLocation} onChange={(e) => setToLocation(e.target.value)} />

        <label>Loading Date</label>
        <input type="date" value={loadingDate} onChange={(e) => setLoadingDate(e.target.value)} />

        <label>Vehicle Number</label>
        <input value={vehicleNumber} onChange={(e) => setVehicleNumber(e.target.value)} />

        <label>Vehicle Type & Tonnage</label>
        <input value={vehicleTypeTonnage} onChange={(e) => setVehicleTypeTonnage(e.target.value)} />

        <label>Freight Amount</label>
        <input type="number" value={freightAmount} onChange={(e) => setFreightAmount(e.target.value)} />

        <label>Advance Amount</label>
        <input type="number" value={advanceAmount} onChange={(e) => setAdvanceAmount(e.target.value)} />

        <label>Other Charges</label>
        <input type="number" value={otherCharges} onChange={(e) => setOtherCharges(e.target.value)} />

        {/* Auto-calculated fields */}
        <label>Total Advance Amount</label>
        <input type="number" value={totalAdvanceAmount} readOnly />

        <label>Balance Amount</label>
        <input type="number" value={balanceAmount} readOnly />

        <div style={{ marginTop: '20px' }}>
          <button type="submit">Update</button>
          <button type="button" onClick={() => setIsEditing(false)} style={{ marginLeft: '12px' }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Edit;
