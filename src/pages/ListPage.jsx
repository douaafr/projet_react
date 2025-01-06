import React, { useEffect, useState, useMemo } from 'react';
import ListItem from '../components/ListItem';

function ListPage({ onCharacterSelect }) {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [sortCriteria, setSortCriteria] = useState(() => {
    // On récupère le dernier critère choisi depuis le localStorage, ou on utilise 'firstName' par défaut
    return localStorage.getItem('lastSortCriteria') || 'firstName';
  });

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then((response) => response.json())
      .then((data) => {
        // Filtrer les personnages ayant une image
        const charactersWithImages = data.filter((character) => character.image);
        setCharacters(charactersWithImages);
      })
      .catch((error) => console.error('Erreur lors de la récupération des personnages :', error));
  }, []);

  // Fonction pour séparer le prénom et le nom
  const splitName = (fullName) => {
    const parts = fullName.split(' ');
    return {
      firstName: parts[0] || '', // Prénom
      lastName: parts.slice(1).join(' ') || '', // Nom
    };
  };

  // Fonction pour trier les personnages
  const sortCharacters = (characters, criteria) => {
    return [...characters].sort((a, b) => {
      const aSplit = splitName(a.name);
      const bSplit = splitName(b.name);

      if (criteria === 'firstName') {
        return aSplit.firstName.localeCompare(bSplit.firstName); // Trie par prénom
      }
      if (criteria === 'lastName') {
        return aSplit.lastName.localeCompare(bSplit.lastName); // Trie par nom
      }
      if (criteria === 'actor') {
        return (a.actor || '').localeCompare(b.actor || ''); // Trie par acteur
      }
      if (criteria === 'house') {
        return (a.house || '').localeCompare(b.house || ''); // Trie par maison
      }
      if (criteria === 'patronus') {
        return (a.patronus || '').localeCompare(b.patronus || ''); // Trie par patronus
      }
      if (criteria === 'ancestry') {
        return (a.ancestry || '').localeCompare(b.ancestry || ''); // Trie par ascendance
      }
      if (criteria === 'wizard') {
        return a.wizard === b.wizard ? 0 : a.wizard ? -1 : 1; // Trie par sorcier (true/false)
      }
      if (criteria === 'dateOfBirth') {
        // Trie par date de naissance (jour, mois, année)
        const [aDay, aMonth, aYear] = (a.dateOfBirth || '00-00-0000').split('-').map(Number);
        const [bDay, bMonth, bYear] = (b.dateOfBirth || '00-00-0000').split('-').map(Number);

        return (
          aYear - bYear || 
          aMonth - bMonth || 
          aDay - bDay 
        );
      }

      return 0; 
    });
  };

  // Mémoriser le tri pour éviter les recalculs inutiles
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
    localStorage.setItem('lastSortCriteria', newCriteria); // Sauvegarde du critère dans le localStorage
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Liste des Personnages</h1>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Rechercher un personnage"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: '10px', marginRight: '10px', width: '300px' }}
        />
        <select
          value={sortCriteria}
          onChange={(e) => handleSortChange(e.target.value)}
          style={{ padding: '10px' }}
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
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {sortedCharacters.map((character) => (
          <ListItem key={character.name} character={character} onClick={() => onCharacterSelect(character)} />
        ))}
      </div>
    </div>
  );
}

export default ListPage;