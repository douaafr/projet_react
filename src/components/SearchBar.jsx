import React from 'react';

function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Rechercher..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        marginBottom: '20px',
        padding: '10px',
        width: '100%',
        maxWidth: '400px',
        borderRadius: '5px',
        border: '1px solid #ccc',
      }}
    />
  );
}

export default SearchBar;
