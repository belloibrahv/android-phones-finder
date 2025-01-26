import { useInfiniteQuery } from '@tanstack/react-query';
import { useFilterStore } from '../store/useFilterStore';
import { ITEMS_PER_PAGE } from '../config/constants';
import { useFilterInteractions } from './useFilterInteractions';
import { FilterInteractionResults } from '@/types/filterInteractions';

export const usePhoneFiltering = (sortOption: string = 'release-date') => {
  const { filteredResults } = useFilterInteractions();
  const filters = useFilterStore();
  
  return useInfiniteQuery({
    queryKey: ['phones', filters, sortOption, filteredResults],
    queryFn: ({ pageParam = 0 }) => {
      // Use pre-filtered results from filterInteractions
      const sortedPhones = sortPhones(filteredResults, sortOption);
      
      const start = pageParam * ITEMS_PER_PAGE;
      const end = start + ITEMS_PER_PAGE;
      const page = sortedPhones.slice(start, end);
      
      return {
        phones: page,
        nextPage: end < sortedPhones.length ? pageParam + 1 : undefined,
        totalPhones: sortedPhones.length
      };
    },
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 0
  });
};

const sortPhones = (phones: FilterInteractionResults[], sortOption: string): FilterInteractionResults[] => {
  switch (sortOption) {
    case 'release-date':
      return [...phones].sort((a, b) => (b.releaseYear || 0) - (a.releaseYear || 0));
    case 'price-asc':
      return [...phones].sort((a, b) => a.price - b.price);
    case 'price-desc':
      return [...phones].sort((a, b) => b.price - a.price);
    default:
      return phones;
  }
};
