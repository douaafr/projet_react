import { useQuery } from '@tanstack/react-query';

export const useCharacters = () => {
  return useQuery({
    queryKey: ['characters'],
    queryFn: async () => {
      const response = await fetch('https://hp-api.onrender.com/api/characters');
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des personnages');
      }
      const data = await response.json();
      return data.filter((character) => character.image);
    },
  });
};
