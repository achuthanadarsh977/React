import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";

function Add({ logistics, setlogistics, setIsAdding }) {
  const [supplierName, setsupplierName] = useState("");
  const [supplierPan, setsupplierPan] = useState("");
  const [tripId, settripId] = useState("");
  const [tripDate, settripDate] = useState("");
  const [billingTo, setbillingTo] = useState("");
  const [fromLocation, setfromLocation] = useState("");
  const [toLocation, settoLocation] = useState("");
  const [loadingDate, setloadingDate] = useState("");
  const [vehicleNumber, setvehicleNumber] = useState("");
  const [vehicleTypeTonnage, setvehicleTypeTonnage] = useState("");
  const [freightAmount, setfreightAmount] = useState("");
  const [advanceAmount, setadvanceAmount] = useState("");
  const [otherCharges, setotherCharges] = useState("");

  const supplierInputRef = useRef(null);

  useEffect(() => {
    supplierInputRef.current.focus();
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();

    if (
      !supplierName ||
      !supplierPan ||
      !tripId ||
      !tripDate ||
      !billingTo
    ) {
      Swal.fire({
        icon: "error",
        title: "Required Fields Missing",
        text: "Please fill all mandatory fields",
      });
      return;
    }

    const totalAdvanceAmount =
      Number(advanceAmount) + Number(otherCharges);

    const balanceAmount =
      Number(freightAmount) - totalAdvanceAmount;

    const newShipment = {
      id: logistics.length + 1,
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
      freightAmount: Number(freightAmount),
      advanceAmount: Number(advanceAmount),
      otherCharges: Number(otherCharges),
      totalAdvanceAmount,
      balanceAmount,
    };

    setlogistics([...logistics, newShipment]);

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: "Shipment details added successfully",
      timer: 1500,
      showConfirmButton: false,
    });

    setIsAdding(false);
  };

  return (
    <div className="container">
      <h2>Add Shipment</h2>

      <form onSubmit={handleAdd}>
        <input ref={supplierInputRef} placeholder="Supplier Name" value={supplierName} onChange={(e) => setsupplierName(e.target.value)} />
        <input placeholder="Supplier PAN" value={supplierPan} onChange={(e) => setsupplierPan(e.target.value)} />
        <input placeholder="Trip ID" value={tripId} onChange={(e) => settripId(e.target.value)} />
        <input type="date" value={tripDate} onChange={(e) => settripDate(e.target.value)} />
        <input placeholder="Billing To" value={billingTo} onChange={(e) => setbillingTo(e.target.value)} />
        <input placeholder="From Location" value={fromLocation} onChange={(e) => setfromLocation(e.target.value)} />
        <input placeholder="To Location" value={toLocation} onChange={(e) => settoLocation(e.target.value)} />
        <input type="date" value={loadingDate} onChange={(e) => setloadingDate(e.target.value)} />
        <input placeholder="Vehicle Number" value={vehicleNumber} onChange={(e) => setvehicleNumber(e.target.value)} />
        <input placeholder="Vehicle Type / Tonnage" value={vehicleTypeTonnage} onChange={(e) => setvehicleTypeTonnage(e.target.value)} />
        <input type="number" placeholder="Freight Amount" value={freightAmount} onChange={(e) => setfreightAmount(e.target.value)} />
        <input type="number" placeholder="Advance Amount" value={advanceAmount} onChange={(e) => setadvanceAmount(e.target.value)} />
        <input type="number" placeholder="Other Charges" value={otherCharges} onChange={(e) => setotherCharges(e.target.value)} />

        <div className="actions">
          <button type="submit">Add</button>
          <button type="button" onClick={() => setIsAdding(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Add;
