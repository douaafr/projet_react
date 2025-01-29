import { useState, useMemo } from 'react';

// Fonction pour séparer le prénom et le nom
const splitName = (fullName) => {
  const parts = fullName.split(' ');
  return {
    firstName: parts[0] || '', // Prénom
    lastName: parts.slice(1).join(' ') || '', // Nom
  };
};

export const useCharacterFilters = (characters) => {
  const [search, setSearch] = useState('');
  const [sortCriteria, setSortCriteria] = useState('actor'); // Critère par défaut : acteur

  const filteredCharacters = useMemo(() => {
    if (!characters) return [];

    // Filtrage par recherche
    const filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(search.toLowerCase())
    );

    // Tri des résultats en fonction du critère sélectionné
    return filtered.sort((a, b) => {
      const aSplit = splitName(a.name);
      const bSplit = splitName(b.name);

      if (sortCriteria === 'firstName') {
        return aSplit.firstName.localeCompare(bSplit.firstName); // Trie par prénom
      }
      if (sortCriteria === 'lastName') {
        return aSplit.lastName.localeCompare(bSplit.lastName); // Trie par nom
      }
      if (sortCriteria === 'actor') {
        return (a.actor || '').localeCompare(b.actor || ''); // Trie par acteur
      }
      if (sortCriteria === 'house') {
        return (a.house || '').localeCompare(b.house || ''); // Trie par maison
      }
      if (sortCriteria === 'patronus') {
        return (a.patronus || '').localeCompare(b.patronus || ''); // Trie par patronus
      }
      if (sortCriteria === 'ancestry') {
        return (a.ancestry || '').localeCompare(b.ancestry || ''); // Trie par ascendance
      }
      if (sortCriteria === 'wizard') {
        return a.wizard === b.wizard ? 0 : a.wizard ? -1 : 1; // Trie par sorcier (true/false)
      }
      if (sortCriteria === 'dateOfBirth') {
        // Trie par date de naissance (jour, mois, année)
        const [aDay, aMonth, aYear] = (a.dateOfBirth || '00-00-0000').split('-').map(Number);
        const [bDay, bMonth, bYear] = (b.dateOfBirth || '00-00-0000').split('-').map(Number);

        return aYear - bYear || aMonth - bMonth || aDay - bDay;
      }

      return 0; // Pas de tri si aucun critère correspondant
    });
  }, [characters, search, sortCriteria]);

  return { search, setSearch, sortCriteria, setSortCriteria, filteredCharacters };
};
