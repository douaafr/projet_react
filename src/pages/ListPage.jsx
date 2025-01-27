import React, { useEffect, useState, useMemo } from 'react';
import ListItem from '../components/ListItem';

function ListPage({ onCharacterSelect, characters: propCharacters = [], onNavigateHome }) {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [sortCriteria, setSortCriteria] = useState(() => {
    return localStorage.getItem('lastSortCriteria') || 'firstName';
  });

  useEffect(() => {
    if (propCharacters.length > 0) {
      setCharacters(propCharacters);
    } else {
      fetch('https://hp-api.onrender.com/api/characters')
        .then((response) => response.json())
        .then((data) => {
          const charactersWithImages = data.filter((character) => character.image);
          setCharacters(charactersWithImages);
        })
        .catch((error) => console.error('Erreur lors de la récupération des personnages :', error));
    }
  }, [propCharacters]);

  const splitName = (fullName) => {
    const parts = fullName.split(' ');
    return {
      firstName: parts[0] || '',
      lastName: parts.slice(1).join(' ') || '',
    };
  };

  const sortCharacters = (characters, criteria) => {
    return [...characters].sort((a, b) => {
      const aSplit = splitName(a.name);
      const bSplit = splitName(b.name);

      if (criteria === 'firstName') {
        return aSplit.firstName.localeCompare(bSplit.firstName);
      }
      if (criteria === 'lastName') {
        return aSplit.lastName.localeCompare(bSplit.lastName);
      }
      if (criteria === 'actor') {
        return (a.actor || '').localeCompare(b.actor || '');
      }
      if (criteria === 'house') {
        return (a.house || '').localeCompare(b.house || '');
      }
      if (criteria === 'patronus') {
        return (a.patronus || '').localeCompare(b.patronus || '');
      }
      if (criteria === 'ancestry') {
        return (a.ancestry || '').localeCompare(b.ancestry || '');
      }
      if (criteria === 'wizard') {
        return a.wizard === b.wizard ? 0 : a.wizard ? -1 : 1;
      }
      if (criteria === 'dateOfBirth') {
        const [aDay, aMonth, aYear] = (a.dateOfBirth || '00-00-0000').split('-').map(Number);
        const [bDay, bMonth, bYear] = (b.dateOfBirth || '00-00-0000').split('-').map(Number);

        return aYear - bYear || aMonth - bMonth || aDay - bDay;
      }

      return 0;
    });
  };

  const sortedCharacters = useMemo(() => {
    return sortCharacters(
      characters.filter((character) =>
        character.name.toLowerCase().includes(search.toLowerCase())
      ),
      sortCriteria
    );
  }, [characters, search, sortCriteria]);

  const handleSortChange = (newCriteria) => {
    setSortCriteria(newCriteria);
    localStorage.setItem('lastSortCriteria', newCriteria);
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Bouton pour revenir à l'accueil */}
      <button
        onClick={onNavigateHome}
        style={{
          padding: '10px 20px',
          borderRadius: '5px',
          backgroundColor: '#ffffff',
          color: '#000000',
          border: 'none',
          cursor: 'pointer',
          marginBottom: '20px',
          fontSize: '1rem',
        }}
      >
        Retour à l'accueil
      </button>

      <h1 style={{ textAlign: 'center' }}>Liste des Personnages</h1>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Rechercher un personnage"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: '10px',
            marginRight: '10px',
            width: '300px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
        <select
          value={sortCriteria}
          onChange={(e) => handleSortChange(e.target.value)}
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        >
          <option value="firstName">Prénom</option>
          <option value="lastName">Nom</option>
          <option value="actor">Acteur</option>
          <option value="house">Maison</option>
          <option value="patronus">Patronus</option>
          <option value="wizard">Sorcier</option>
          <option value="ancestry">Ascendance</option>
          <option value="dateOfBirth">Date de Naissance</option>
        </select>
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {sortedCharacters.map((character) => (
          <ListItem key={character.name} character={character} onClick={() => onCharacterSelect(character)} />
        ))}
      </div>
    </div>
  );
}

export default ListPage;
