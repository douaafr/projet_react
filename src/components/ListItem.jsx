import React from 'react';

function ListItem({ character, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: '200px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '10px',
        textAlign: 'center',
        cursor: 'pointer',
        backgroundColor: '#f9f9f9',
      }}
    >
      <img
        src={character.image || 'https://via.placeholder.com/150'}
        alt={character.name}
        style={{ width: '100%', borderRadius: '10px' }}
      />
      <h3>{character.name}</h3>
      <p>{character.house || 'Maison inconnue'}</p>
    </div>
  );
}

export default ListItem;