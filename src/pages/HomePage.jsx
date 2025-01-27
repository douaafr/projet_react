import React, { useState } from 'react';

function HomePage({ onNavigate, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm); // Chercher un personnage précis
    } else {
      alert('Veuillez entrer un nom pour rechercher un personnage.');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw', // Ajouté pour utiliser toute la largeur
        background: 'linear-gradient(to bottom,rgb(114, 87, 30),rgb(152, 123, 42))',
        color: '#fff',
        margin: '0', // Supprimer les marges potentielles
        padding: '0', // Supprimer les paddings potentiels
        overflow: 'hidden', // Éviter les débordements
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          marginBottom: '30px',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        }}
      >
        Bienvenue dans l'univers Harry Potter
      </h1>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <input
          type="text"
          placeholder="Rechercher un personnage..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '10px',
            width: '300px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '1rem',
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: '10px 20px',
            borderRadius: '5px',
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
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
          boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
        }}
      >
        Voir tous les personnages
      </button>
    </div>
  );
}

export default HomePage;
