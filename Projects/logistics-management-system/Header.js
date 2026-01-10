import React from 'react'



function Header({ setIsAdding }) {
  return (
    <header>
      <h1>Logistics Management</h1>
      <button
        className="round-button"
        onClick={() => setIsAdding(true)}
      >
        + Add Trip
      </button>
    </header>
  );
}

export default Header;

