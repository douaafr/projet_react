import React from "react";

function CharacterCard({ character, onClick, isSelected }) {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",
        border: isSelected ? "2px solid #4CAF50" : "1px solid #ccc",
        borderRadius: "10px",
        padding: "10px",
        backgroundColor: isSelected ? "#f0f8f0" : "#f9f9f9",
        width: "200px",
        textAlign: "center",
      }}
    >
      <img
        src={character.image}
        alt={character.name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "5px",
        }}
      />
      <p>{character.name}</p>
    </div>
  );
}

export default CharacterCard;
