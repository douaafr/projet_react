import React, { useState } from "react";

function HomePage({ onNavigate, onSearch, onNavigateCompare }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      onSearch(searchTerm);
    } else {
      alert("Veuillez entrer un nom à rechercher.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "100vh",
        background: "linear-gradient(to bottom, rgb(114, 87, 30), rgb(152, 123, 42))",
        color: "#fff",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
        Bienvenue dans l'univers Harry Potter
      </h1>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
        <div>
          <input
            type="text"
            placeholder="Rechercher un personnage"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: "10px",
              width: "300px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginRight: "10px",
            }}
          />
          <button
            onClick={handleSearch}
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Chercher
          </button>
        </div>
        <button
          onClick={onNavigate}
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Voir la liste des personnages
        </button>
        <button
          onClick={onNavigateCompare}
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            backgroundColor: "#ffc107",
            color: "#000",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Comparer des personnages
        </button>
      </div>
    </div>
  );
}

export default HomePage;
