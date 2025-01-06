import React from 'react';

function DetailPage({ character, onNavigateBack }) {
  if (!character) {
    return <p>Aucun personnage sélectionné.</p>;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{character.name}</h1>
      <img
        src={character.image}
        alt={character.name}
        style={{ width: '200px', borderRadius: '10px' }}
      />
      <p><strong>Date de naissance :</strong> {character.dateOfBirth || 'Non connue'}</p>
      <p><strong>Acteur :</strong> {character.actor || 'Inconnu'}</p>
      <p><strong>Maison :</strong> {character.house || 'Non attribuée'}</p>
      <p><strong>Patronus :</strong> {character.patronus || 'Non connu'}</p>
      <p><strong>Sorcier :</strong> {character.wizard ? 'Oui' : 'Non'}</p>
      <p><strong>Ascendance :</strong> {character.ancestry || 'Non connue'}</p>
      <button onClick={onNavigateBack} style={{ padding: '10px 20px', cursor: 'pointer', marginTop: '20px' }}>
        Retour à la liste
      </button>
    </div>
  );
}


export default DetailPage;