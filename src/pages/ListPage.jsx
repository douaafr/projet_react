import React from "react";
import { useCharacterFilters } from "../hooks/useCharacterFilters.jsx";
import ListItem from "../components/ListItem";
import parchment from "../assets/parchment.jpg"; // Importation du fond parcheminé

function ListPage({ 
  characters,
  onCharacterSelect,
  onNavigateHome,
  favorites,
  toggleFavorite,
}) {
  const { search, setSearch, sortCriteria, setSortCriteria, filteredCharacters } =
    useCharacterFilters(characters);

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

      <h1 style={{ textAlign: "center" }}>Liste des Personnages</h1>

      {/* Barre de recherche et filtres */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Rechercher un personnage"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            marginRight: "10px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <select
          value={sortCriteria}
          onChange={(e) => setSortCriteria(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        >
          <option value="firstName">Prénom</option>
          <option value="lastName">Nom</option>
          <option value="actor">Acteur</option>
          <option value="house">Maison</option>
          <option value="patronus">Patronus</option>
          <option value="ancestry">Ascendance</option>
          <option value="wizard">Sorcier</option>
          <option value="dateOfBirth">Date de Naissance</option>
        </select>
      </div>

      {/* Liste des personnages */}
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
        {filteredCharacters.map((character) => (
          <ListItem
            key={character.name}
            character={character}
            onClick={() => onCharacterSelect(character)}
            isFavorite={favorites.includes(character.name)}
            toggleFavorite={() => toggleFavorite(character.name)}
          />
        ))}
      </div>
    </div>
  );
}

export default ListPage;
