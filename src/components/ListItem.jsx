import React from "react";

function ListItem({ character, onClick, toggleFavorite, isFavorite }) {
  return (
    <div
      onClick={onClick} 
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "10px",
        textAlign: "center",
        width: "220px",
        backgroundColor: "#fff",
        position: "relative",
        cursor: "pointer", 
      }}
    >
      {/* Image du personnage */}
      <img
        src={character.image}
        alt={character.name}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <h3>{character.name}</h3>
      <p>{character.house || "Maison inconnue"}</p>

      {}
      <div
        onClick={(e) => {
          e.stopPropagation(); // pour ne pas ouvrir les détails quand on clique sur l'étoile
          toggleFavorite(character);
        }}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          cursor: "pointer",
        }}
      >
        {isFavorite ? (
          <span
            style={{
              fontSize: "28px", 
              color: "#ffc107",
            }}
          >
            ★
          </span>
        ) : (
          <span
            style={{
              fontSize: "28px",
              color: "#ccc",
            }}
          >
            ☆
          </span>
        )}
      </div>
    </div>
  );
}

export default ListItem;
