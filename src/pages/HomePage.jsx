import React, { useState } from 'react';

function HomePage({ onNavigate, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      alert('Veuillez entrer un nom pour rechercher.');
      return;
    }
    onSearch(searchTerm);
  };

  return (
    <div
      style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Bienvenue dans l'univers Harry Potter</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Rechercher un personnage"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '300px',
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: '10px 20px',
            borderRadius: '5px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Chercher
        </button>
      </div>
      <button
        onClick={onNavigate}
        style={{
          padding: '10px 20px',
          borderRadius: '5px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1rem',
        }}
      >
        Voir la liste des personnages
      </button>
    </div>
  );
}

export default HomePage;
