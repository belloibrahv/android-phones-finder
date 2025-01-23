import { useEffect, useState } from 'react';
import { FilterState, useFilterStore } from '../store/useFilterStore';
import { initializeFilterInteractions, updateFilterInteractions } from '@/utils/filterInteractions';
import { FilterInteractionResults } from '@/types/filterInteractions';

export const useFilterInteractions = (filteredResults: FilterInteractionResults[]) => {
  const filters = useFilterStore();
  const [sortOption, setSortOption] = useState('release-date');

  useEffect(() => {
    // Initialize filter interactions
    initializeFilterInteractions();
    
    // Restore filters from session storage
    const storedInteractions = sessionStorage.getItem('filterInteractions');
    if (storedInteractions) {
      const parsed = JSON.parse(storedInteractions);
      
      // Restore each filter value
      Object.entries(parsed).forEach(([key, value]) => {
        if (key !== 'results' && key !== 'sortBy') {
          filters.setFilter(key as keyof FilterState, value);
        }
        if (key === 'sortBy') {
          setSortOption(value as string);
        }
      });
    }
  }, []);

  useEffect(() => {
    // Update all filters and results whenever any filter changes
    updateFilterInteractions('priceRange', filters.priceRange, filteredResults);
    updateFilterInteractions('brand', filters.brand, filteredResults);
    updateFilterInteractions('primaryCamera', filters.primaryCamera, filteredResults);
    updateFilterInteractions('features', filters.features, filteredResults);
    updateFilterInteractions('batteryLife', filters.batteryLife, filteredResults);
    updateFilterInteractions('screenSize', filters.screenSize, filteredResults);
    updateFilterInteractions('storage', filters.storage, filteredResults);
    updateFilterInteractions('ram', filters.ram, filteredResults);
    updateFilterInteractions('screenResolution', filters.screenResolution, filteredResults);
    updateFilterInteractions('dimensions', filters.dimensions, filteredResults);
    updateFilterInteractions('releaseYear', filters.releaseYear, filteredResults);
    updateFilterInteractions('searchQuery', filters.searchQuery, filteredResults);
    updateFilterInteractions('sortBy', sortOption, filteredResults);

    // Store in sessionStorage immediately after any update
    sessionStorage.setItem('filterInteractions', JSON.stringify(window.filterInteractions));
  }, [
    filters.priceRange,
    filters.brand,
    filters.primaryCamera,
    filters.features,
    filters.batteryLife,
    filters.screenSize,
    filters.storage,
    filters.ram,
    filters.screenResolution,
    filters.dimensions,
    filters.releaseYear,
    filters.searchQuery,
    sortOption,
    filteredResults
  ]);

  return { sortOption, setSortOption };
};
