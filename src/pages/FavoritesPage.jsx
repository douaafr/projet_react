import React from "react";
import ListItem from "../components/ListItem";
import parchment from "../assets/parchment.jpg"; // Importation du fond parcheminé

function FavoritesPage({ favorites, characters, onCharacterSelect, onNavigateHome, toggleFavorite }) {
  const favoriteCharacters = characters.filter((character) =>
    favorites.includes(character.name)
  );

  return (
    <div
      style={{
        padding: "20px",
        minHeight: "100vh",
        background: `url(${parchment}) center/cover no-repeat`,
      }}
    >
      {/* Bouton pour revenir à l'accueil */}
      <button
        onClick={onNavigateHome}
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          backgroundColor: "#ffffff",
          color: "#000000",
          border: "none",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Retour à l'accueil
      </button>

      <h1 style={{ textAlign: "center" }}>Mes Favoris</h1>
      {favoriteCharacters.length === 0 ? (
        <p style={{ textAlign: "center" }}>Aucun personnage ajouté aux favoris.</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {favoriteCharacters.map((character) => (
            <ListItem
              key={character.name}
              character={character}
              onClick={() => onCharacterSelect(character)}
              isFavorite={favorites.includes(character.name)}
              toggleFavorite={() => toggleFavorite(character.name)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
