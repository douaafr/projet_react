import { useState, useMemo } from 'react';

export const useCharacterFilters = (characters) => {
  const [search, setSearch] = useState('');
  const [sortCriteria, setSortCriteria] = useState('firstName');

  const filteredCharacters = useMemo(() => {
    if (!characters) return [];
    const filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(search.toLowerCase())
    );
    return filtered.sort((a, b) => {
      if (sortCriteria === 'firstName') {
        return a.name.localeCompare(b.name);
      }
      if (sortCriteria === 'house') {
        return (a.house || '').localeCompare(b.house || '');
      }
      return 0;
    });
  }, [characters, search, sortCriteria]);

  return { search, setSearch, sortCriteria, setSortCriteria, filteredCharacters };
};
