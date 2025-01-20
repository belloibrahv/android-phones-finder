import { useEffect } from 'react';
import { useFilterStore } from '../store/useFilterStore';
import { initializeFilterInteractions, updateFilterInteractions } from '@/utils/filterInteractions';
import { FilterInteractionResults } from '@/types/filterInteractions';

export const useFilterInteractions = (filteredResults: FilterInteractionResults[]) => {
  const filters = useFilterStore();

  useEffect(() => {
    // Initialize the global variable when the component mounts
    initializeFilterInteractions();
  }, []);

  useEffect(() => {
    // Update all filters and results whenever any filter changes
    updateFilterInteractions('priceRange', filters.priceRange, filteredResults);
    updateFilterInteractions('brand', filters.brand, filteredResults);
    updateFilterInteractions('primaryCamera', filters.primaryCamera, filteredResults);
    updateFilterInteractions('features', filters.features, filteredResults);
    updateFilterInteractions('batteryLife', filters.batteryLife, filteredResults);
    updateFilterInteractions('screenSize', filters.screenSize, filteredResults);
    updateFilterInteractions('searchQuery', filters.searchQuery, filteredResults);
  }, [
    filters.priceRange,
    filters.brand,
    filters.primaryCamera,
    filters.features,
    filters.batteryLife,
    filters.screenSize,
    filters.searchQuery,
    filteredResults
  ]);
};
