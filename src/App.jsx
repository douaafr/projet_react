import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Navigation entre pages
  const [selectedCharacter, setSelectedCharacter] = useState(null); // Stocke le personnage sélectionné

  const renderPage = () => {
    if (currentPage === 'home') {
      return <HomePage onNavigate={() => setCurrentPage('list')} />;
    } else if (currentPage === 'list') {
      return (
        <ListPage
          onCharacterSelect={(character) => {
            setSelectedCharacter(character);
            setCurrentPage('detail');
          }}
        />
      );
    } else if (currentPage === 'detail') {
      return <DetailPage character={selectedCharacter} onNavigateBack={() => setCurrentPage('list')} />;
    }
  };

  return <div>{renderPage()}</div>;
}

export default App;