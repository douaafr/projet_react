import React from "react";

function HomePage({ onNavigate, onSearch, onNavigateCompare, onNavigateFavorites }) {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearchClick = () => {
    if (searchTerm.trim() === "") {
      alert("Veuillez entrer un nom de personnage à rechercher.");
    } else {
      onSearch(searchTerm.trim());
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "50px 20px" }}>
      <h1>Bienvenue dans l'univers Harry Potter</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Rechercher un personnage"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "300px",
          }}
        />
        <button
          onClick={handleSearchClick}
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            backgroundColor: "#007BFF",
            color: "#ffffff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Rechercher
        </button>
      </div>

      <button
        onClick={onNavigate}
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          backgroundColor: "#28a745",
          color: "#ffffff",
          border: "none",
          cursor: "pointer",
          marginRight: "10px",
        }}
      >
        Voir tous les personnages
      </button>

      <button
        onClick={onNavigateCompare}
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          backgroundColor: "#ffc107",
          color: "#ffffff",
          border: "none",
          cursor: "pointer",
          marginRight: "10px",
        }}
      >
        Comparer des personnages
      </button>

      <button
        onClick={onNavigateFavorites}
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          backgroundColor: "#6f42c1",
          color: "#ffffff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Voir mes favoris
      </button>
    </div>
  );
}

export default HomePage;
