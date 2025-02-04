import React, { useState } from "react";

function ComparePage({ characters, onNavigateHome }) {
  const [selectedCharacters, setSelectedCharacters] = useState([]);

  const handleSelectCharacter = (character) => {
    if (selectedCharacters.includes(character)) {
      setSelectedCharacters(selectedCharacters.filter((c) => c !== character));
    } else if (selectedCharacters.length < 2) {
      setSelectedCharacters([...selectedCharacters, character]);
    } else {
      alert("Vous pouvez comparer uniquement deux personnages à la fois.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
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

      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
        Comparer deux personnages
      </h1>
      <p style={{ textAlign: "center", marginBottom: "20px", color: "#FFF" }}>
        Sélectionnez 2 personnages pour comparer.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "20px",
        }}
      >
        {/* Résultat de la comparaison */}
        <div style={{ flex: "1", marginRight: "20px" }}>
          {selectedCharacters.length === 2 && (
            <div>
              <h2 style={{ textAlign: "center" }}>Résultat de la comparaison :</h2>
              <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                {selectedCharacters.map((character) => (
                  <div
                    key={character.name}
                    style={{
                      textAlign: "center",
                      width: "200px",
                      padding: "20px",
                      backgroundColor: "#fff",
                      borderRadius: "10px",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <img
                      src={character.image}
                      alt={character.name}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                    <h3>{character.name}</h3>
                    <p>Maison : {character.house || "Inconnue"}</p>
                    <p>Acteur : {character.actor || "Inconnu"}</p>
                    <p>Patronus : {character.patronus || "Inconnu"}</p>
                    <p>Ascendance : {character.ancestry || "Inconnue"}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Liste des personnages */}
        <div
          style={{
            flex: "2",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {characters.map((character) => (
            <div
              key={character.name}
              onClick={() => handleSelectCharacter(character)}
              style={{
                cursor: "pointer",
                border: selectedCharacters.includes(character)
                  ? "2px solid #007bff"
                  : "1px solid #ccc",
                borderRadius: "10px",
                padding: "10px",
                textAlign: "center",
                width: "150px",
                backgroundColor: "#fff",
              }}
            >
              <img
                src={character.image}
                alt={character.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <h3 style={{ fontSize: "1rem", margin: "10px 0 5px" }}>
                {character.name}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#555" }}>
                {character.house || "Maison inconnue"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ComparePage;
