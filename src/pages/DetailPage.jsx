import React from 'react';

function DetailPage({ character, onNavigateBack }) {
  if (!character) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px', color: '#fff' }}>
        <h1>Personnage non trouvé</h1>
        <button
          onClick={onNavigateBack}
          style={{
            padding: '10px 20px',
            borderRadius: '5px',
            backgroundColor: '#ffffff',
            color: '#000000',
            border: 'none',
            cursor: 'pointer',
            marginTop: '20px',
          }}
        >
          Retour à la liste
        </button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', color: '#fff' }}>
      <h1>{character.name}</h1>
      <img
        src={character.image}
        alt={character.name}
        style={{
          width: '200px',
          height: 'auto',
          borderRadius: '10px',
          marginBottom: '20px',
        }}
      />
      <p>
        <strong>Maison :</strong> {character.house || 'Non connue'}
      </p>
      <p>
        <strong>Acteur :</strong> {character.actor || 'Non connu'}
      </p>
      <p>
        <strong>Patronus :</strong> {character.patronus || 'Non connu'}
      </p>
      <p>
        <strong>Ascendance :</strong> {character.ancestry || 'Non connue'}
      </p>
      <button
        onClick={onNavigateBack}
        style={{
          padding: '10px 20px',
          borderRadius: '5px',
          backgroundColor: '#ffffff',
          color: '#000000',
          border: 'none',
          cursor: 'pointer',
          marginTop: '20px',
        }}
      >
        Retour à la liste
      </button>
    </div>
  );
}

export default DetailPage;
