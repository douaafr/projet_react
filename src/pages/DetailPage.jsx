import React from 'react';
import parchment from "../assets/parchment.jpg"; 
function DetailPage({ character, onNavigateBack }) {
  if (!character) {
    return (
      <div
        style={{
          textAlign: 'center',
          marginTop: '50px',
          color: '#4a2200',
          minHeight: "100vh",
          background: `url(${parchment}) center/cover no-repeat`,
          padding: "40px 20px",
          boxSizing: "border-box",
        }}
      >
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
    <div
      style={{
        textAlign: 'center',
        minHeight: "100vh",
        background: `url(${parchment}) center/cover no-repeat`,
        padding: "40px 20px",
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ color: "#4a2200", fontSize: "2.5rem", marginBottom: "20px" }}>
        {character.name}
      </h1>

      <img
        src={character.image}
        alt={character.name}
        style={{
          width: '250px',
          height: 'auto',
          borderRadius: '10px',
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          marginBottom: '20px',
        }}
      />

      <p style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#4a2200" }}>
        <strong>Maison :</strong> {character.house || 'Non connue'}
      </p>
      <p style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#4a2200" }}>
        <strong>Acteur :</strong> {character.actor || 'Non connu'}
      </p>
      <p style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#4a2200" }}>
        <strong>Patronus :</strong> {character.patronus || 'Non connu'}
      </p>
      <p style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#4a2200" }}>
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
          fontSize: "1rem",
        }}
      >
        Retour à la liste
      </button>
    </div>
  );
}

export default DetailPage;
