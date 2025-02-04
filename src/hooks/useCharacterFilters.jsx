import { useState, useMemo } from 'react';

//pour séparer le prénom et le nom
const splitName = (fullName) => {
  const parts = fullName.split(' ');
  return {
    firstName: parts[0] || '',
    lastName: parts.slice(1).join(' ') || '', 
  };
};

export const useCharacterFilters = (characters) => {
  const [search, setSearch] = useState('');
  const [sortCriteria, setSortCriteria] = useState('actor'); // Critère de tri par défaut

  const filteredCharacters = useMemo(() => {
    if (!characters) return [];

    // Filtrage par recherche pour afficher les personnages au même temps que la saisie
    const filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(search.toLowerCase())
    );

    // Tri des résultats en fonction du critère sélectionné
    return filtered.sort((a, b) => {
      const aSplit = splitName(a.name);
      const bSplit = splitName(b.name);

      if (sortCriteria === 'firstName') {
        return aSplit.firstName.localeCompare(bSplit.firstName); 
      }
      if (sortCriteria === 'lastName') {
        return aSplit.lastName.localeCompare(bSplit.lastName); 
      }
      if (sortCriteria === 'actor') {
        return (a.actor || '').localeCompare(b.actor || ''); 
      }
      if (sortCriteria === 'house') {
        return (a.house || '').localeCompare(b.house || ''); 
      }
      if (sortCriteria === 'patronus') {
        return (a.patronus || '').localeCompare(b.patronus || ''); 
      }
      if (sortCriteria === 'ancestry') {
        return (a.ancestry || '').localeCompare(b.ancestry || ''); 
      }
      if (sortCriteria === 'wizard') {
        return a.wizard === b.wizard ? 0 : a.wizard ? -1 : 1; 
      }
      if (sortCriteria === 'dateOfBirth') {
        
        const [aDay, aMonth, aYear] = (a.dateOfBirth || '00-00-0000').split('-').map(Number);
        const [bDay, bMonth, bYear] = (b.dateOfBirth || '00-00-0000').split('-').map(Number);

        return aYear - bYear || aMonth - bMonth || aDay - bDay;
      }

      return 0; 
    });
  }, [characters, search, sortCriteria]);

  return { search, setSearch, sortCriteria, setSortCriteria, filteredCharacters };
};
