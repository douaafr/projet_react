import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then((response) => response.json())
      .then((data) => {
        const charactersWithImages = data.filter((character) => character.image);
        setCharacters(charactersWithImages);
      })
      .catch((error) => console.error('Erreur lors du chargement des personnages :', error));
  }, []);

  const handleSearch = (searchTerm) => {
    const foundCharacter = characters.find((character) =>
      character.name.toLowerCase() === searchTerm.toLowerCase()
    );

    if (foundCharacter) {
      setSelectedCharacter(foundCharacter);
      setCurrentPage('detail');
    } else {
      alert("Personnage non trouvé. Veuillez vérifier l'orthographe.");
    }
  };

  const renderPage = () => {
    if (currentPage === 'home') {
      return (
        <HomePage
          onNavigate={() => setCurrentPage('list')}
          onSearch={handleSearch}
        />
      );
    } else if (currentPage === 'list') {
      return (
        <ListPage
          characters={characters}
          onCharacterSelect={(character) => {
            setSelectedCharacter(character);
            setCurrentPage('detail');
          }}
          onNavigateHome={() => setCurrentPage('home')} // Ajout de la fonction pour revenir à l'accueil
        />
      );
    } else if (currentPage === 'detail') {
      return (
        <DetailPage
          character={selectedCharacter}
          onNavigateBack={() => setCurrentPage('list')}
        />
      );
    }
  };

  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, rgb(114, 87, 30), rgb(152, 123, 42))',
        minHeight: '100vh',
        width: '100vw',
        overflowX: 'hidden',
        padding: 0,
        margin: 0,
      }}
    >
      {renderPage()}
    </div>
  );
}

export default App;
