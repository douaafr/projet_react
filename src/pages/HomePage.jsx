import React from 'react';

function HomePage({ onNavigate }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Bienvenue dans l'univers Harry Potter</h1>
      <button onClick={onNavigate} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Voir les personnages
      </button>
    </div>
  );
}

export default HomePage;