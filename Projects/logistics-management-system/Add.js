import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';

function Add({ shipments, setShipments, setIsAdding }) {
  const [formData, setFormData] = useState({
    supplierName: '',
    supplierPan: '',
    tripId: '',
    tripDate: '',
    billingTo: '',
    fromLocation: '',
    toLocation: '',
    loadingDate: '',
    vehicleNumber: '',
    vehicleTypeTonnage: '',
    freightAmount: '',
    advanceAmount: '',
    otherCharges: ''
  });

  const textInput = useRef(null);

  useEffect(() => {
    if (textInput.current) {
      textInput.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidPAN = (value) => /^[A-Za-z0-9]{10}$/.test((value || '').trim());

  const handleAdd = (e) => {
    e.preventDefault();

    const {
      supplierName,
      supplierPan,
      tripId,
      tripDate,
      billingTo,
      fromLocation,
      toLocation,
      loadingDate,
      vehicleNumber,
      vehicleTypeTonnage,
      freightAmount,
      advanceAmount,
      otherCharges
    } = formData;

    // Validation
    if (
      !supplierName || !supplierPan || !tripId || !tripDate || !billingTo ||
      !fromLocation || !toLocation || !loadingDate || !vehicleNumber ||
      !vehicleTypeTonnage || !freightAmount || !advanceAmount
    ) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true
      });
    }

    if (!isValidPAN(supplierPan)) {
      return Swal.fire({
        icon: 'error',
        title: 'Invalid PAN',
        text: 'PAN must be exactly 10 alphanumeric characters.',
        showConfirmButton: true
      });
    }

    const id = Date.now(); // unique ID
    const totalAdvanceAmount = Number(advanceAmount) + Number(otherCharges || 0);
    const balanceAmount = Number(freightAmount) - totalAdvanceAmount;

    const newShipment = {
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
      balanceAmount
    };

    setShipments([...shipments, newShipment]);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `Shipment ${tripId} has been added.`,
      showConfirmButton: false,
      timer: 1500
    });
  };

  const totalAdvanceAmount = Number(formData.advanceAmount) + Number(formData.otherCharges || 0);
  const balanceAmount = Number(formData.freightAmount) - totalAdvanceAmount;

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Shipment</h1>

        {/* Existing fields */}
        {[
          { label: 'Supplier Name', name: 'supplierName', type: 'text', ref: textInput },
          { label: 'Supplier PAN', name: 'supplierPan', type: 'text' },
          { label: 'Trip ID', name: 'tripId', type: 'text' },
          { label: 'Trip Date', name: 'tripDate', type: 'date' },
          { label: 'Billing To', name: 'billingTo', type: 'text' },
          { label: 'From Location', name: 'fromLocation', type: 'text' },
          { label: 'To Location', name: 'toLocation', type: 'text' },
          { label: 'Loading Date', name: 'loadingDate', type: 'date' },
          { label: 'Vehicle Number', name: 'vehicleNumber', type: 'text' },
          { label: 'Vehicle Type & Tonnage', name: 'vehicleTypeTonnage', type: 'text' },
          { label: 'Freight Amount', name: 'freightAmount', type: 'number' },
          { label: 'Advance Amount', name: 'advanceAmount', type: 'number' },
          { label: 'Other Charges', name: 'otherCharges', type: 'number' }
        ].map((field, idx) => (
          <div key={idx}>
            <label>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              ref={field.ref || null}
              value={formData[field.name]}
              onChange={handleChange}
              maxLength={field.name === 'supplierPan' ? 10 : undefined}
            />
            <br />
          </div>
        ))}

        {/* Auto-calculated fields */}
        <label>Total Advance Amount</label>
        <input type="number" value={totalAdvanceAmount} readOnly />

        <label>Balance Amount</label>
        <input type="number" value={balanceAmount} readOnly />

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
