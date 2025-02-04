import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import FavoritesPage from "./pages/FavoritesPage";
import ComparePage from "./pages/ComparePage";
import { useCharacters } from "./hooks/useCharacters";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // Ajouter un état pour la recherche
  const [favorites, setFavorites] = useState([]);

  const { data: characters = [], isLoading, error } = useCharacters();

  // Fonction pour gérer la recherche
  const handleSearch = (term) => {
    setSearchTerm(term);
    const foundCharacter = characters.find(
      (character) => character.name.toLowerCase() === term.toLowerCase()
    );
    if (foundCharacter) {
      setSelectedCharacter(foundCharacter);
      setCurrentPage("detail");
    } else {
      alert("Personnage non trouvé. Veuillez vérifier l'orthographe.");
    }
  };

  // Fonction pour ajouter ou retirer un favori
  const toggleFavorite = (characterName) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(characterName)
        ? prevFavorites.filter((name) => name !== characterName)
        : [...prevFavorites, characterName]
    );
  };

  // Rendu des différentes pages
  const renderPage = () => {
    if (currentPage === "home") {
      return (
        <HomePage
          onNavigate={() => setCurrentPage("list")}
          onNavigateFavorites={() => setCurrentPage("favorites")}
          onNavigateCompare={() => setCurrentPage("compare")}
          onSearch={handleSearch} // Passer la fonction de recherche
        />
      );
    } else if (currentPage === "list") {
      return (
        <ListPage
          characters={characters}
          onCharacterSelect={(character) => {
            setSelectedCharacter(character);
            setCurrentPage("detail");
          }}
          onNavigateHome={() => setCurrentPage("home")}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      );
    } else if (currentPage === "favorites") {
      return (
        <FavoritesPage
          favorites={favorites}
          characters={characters}
          onCharacterSelect={(character) => {
            setSelectedCharacter(character);
            setCurrentPage("detail");
          }}
          onNavigateHome={() => setCurrentPage("home")}
          toggleFavorite={toggleFavorite}
        />
      );
    } else if (currentPage === "compare") {
      return (
        <ComparePage
          characters={characters}
          onNavigateHome={() => setCurrentPage("home")}
        />
      );
    } else if (currentPage === "detail") {
      return (
        <DetailPage
          character={selectedCharacter}
          onNavigateBack={() => setCurrentPage("list")}
        />
      );
    }
  };

  // Gestion des erreurs et du chargement
  if (isLoading) return <p>Chargement des personnages...</p>;
  if (error)
    return <p>Erreur lors du chargement des personnages : {error.message}</p>;

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, rgb(114, 87, 30), rgb(152, 123, 42))",
        minHeight: "100vh",
        width: "100vw",
        overflowX: "hidden",
        padding: 0,
        margin: 0,
      }}
    >
      {renderPage()}
    </div>
  );
}

export default App;
