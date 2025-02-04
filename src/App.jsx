import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import ComparePage from "./pages/ComparePage";
import { useCharacters } from "./hooks/useCharacters";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const { data: characters = [], isLoading, error } = useCharacters();

  const handleSearch = (searchTerm) => {
    const foundCharacter = characters.find(
      (character) => character.name.toLowerCase() === searchTerm.toLowerCase()
    );

    if (foundCharacter) {
      setSelectedCharacter(foundCharacter);
      setCurrentPage("detail");
    } else {
      alert("Personnage non trouvé. Veuillez vérifier l'orthographe.");
    }
  };

  const renderPage = () => {
    if (currentPage === "home") {
      return (
        <HomePage
          onNavigate={() => setCurrentPage("list")}
          onSearch={handleSearch}
          onNavigateCompare={() => setCurrentPage("compare")}
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

  if (isLoading) return <p>Chargement des personnages...</p>;
  if (error) return <p>Erreur lors du chargement des personnages : {error.message}</p>;

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
