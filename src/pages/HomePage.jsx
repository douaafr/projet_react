import React from "react";
import MagicStars from "../components/MagicStars"; 
import parchment from "../assets/chateau.png"; 

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
    <div
      style={{
        textAlign: "center",
        padding: "50px 20px",
        minHeight: "100vh",
        background: `url(${parchment}) center/cover no-repeat`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {}
      <MagicStars />

      {}
      <div style={{ position: "relative", zIndex: 2, backgroundColor: "rgba(255, 255, 255, 0.6)", padding: "20px", borderRadius: "10px" }}>
        <h1
          style={{
            fontFamily: "'Harry P', serif, cursive",
            fontSize: "3rem",
            color: "#4a2200",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Bienvenue dans l'univers Harry Potter
        </h1>

        <div style={{ marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
          <input
            type="text"
            placeholder="Rechercher un personnage"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "2px solid #8b5a2b",
              width: "300px",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              fontSize: "1rem",
            }}
          />
          <button
            onClick={handleSearchClick}
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              backgroundColor: "#d4af37",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#b8860b")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#d4af37")}
          >
            Rechercher
          </button>
        </div>

        {/* Groupe de boutons */}
        <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
          <button
            onClick={onNavigate}
            style={{
              padding: "12px 20px",
              borderRadius: "5px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1rem",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            Voir tous les personnages
          </button>

          <button
            onClick={onNavigateCompare}
            style={{
              padding: "12px 20px",
              borderRadius: "5px",
              backgroundColor: "#ffc107",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1rem",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            Comparer des personnages
          </button>

          <button
            onClick={onNavigateFavorites}
            style={{
              padding: "12px 20px",
              borderRadius: "5px",
              backgroundColor: "#6f42c1",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "1rem",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            Voir mes favoris
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
