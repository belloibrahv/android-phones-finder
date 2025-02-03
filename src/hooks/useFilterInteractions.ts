import { useEffect, useState } from 'react';
import {  useFilterStore } from '../store/useFilterStore';
import { initializeFilterInteractions, updateFilterInteractions } from '@/utils/filterInteractions';
import { FilterInteractionResults, FilterInteractions } from '@/types/filterInteractions';
import { generateMockPhones } from '../utils/mockData';

export const useFilterInteractions = (initialResults: FilterInteractionResults[] = []) => {
  const filters = useFilterStore();
  const [sortOption, setSortOption] = useState(() => {
    // Initialize sort option from session storage if available
    const storedInteractions = sessionStorage.getItem('filterInteractions');
    if (storedInteractions) {
      const parsed = JSON.parse(storedInteractions);
      return parsed.sortBy || 'release-date';
    }
    return 'release-date';
  });
  const [filteredResults, setFilteredResults] = useState<FilterInteractionResults[]>(initialResults);
  const allPhones = generateMockPhones();

  useEffect(() => {
    const handleStorageChange = () => {
      const storedInteractions = sessionStorage.getItem('filterInteractions');
      if (storedInteractions) {
        const parsed = JSON.parse(storedInteractions);
        setSortOption(parsed.sortBy || 'release-date');
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  useEffect(() => {
    initializeFilterInteractions();
    const storedInteractions = sessionStorage.getItem('filterInteractions');
    if (storedInteractions) {
      const parsed = JSON.parse(storedInteractions);
      Object.entries(parsed).forEach(([key, value]) => {
        if (key !== 'results' && key !== 'sortBy') {
          filters.setFilter(
            key as keyof Omit<FilterInteractions, 'results' | 'sortBy'>,
            value as string[] | string 
          );
        }
        if (key === 'sortBy') {
          setSortOption(value as string);
        }
        if (key === 'results') {
          setFilteredResults(value as FilterInteractionResults[]);
        }
      });
    }
  }, []);

  const updateSortOption = (newSortOption: string) => {
    setSortOption(newSortOption);
    const storedInteractions = sessionStorage.getItem('filterInteractions');
    if (storedInteractions) {
      const parsed = JSON.parse(storedInteractions);
      parsed.sortBy = newSortOption;
      sessionStorage.setItem('filterInteractions', JSON.stringify(parsed));
      // Trigger storage event for cross-component communication
      window.dispatchEvent(new Event('storage'));
    }
  };

  // Method to update filtered results
  const updateFilteredResults = (newResults: FilterInteractionResults[]) => {
    try {
      setFilteredResults(newResults);
      if (window.filterInteractions) {
        window.filterInteractions.results = newResults;
        sessionStorage.setItem(
          'filterInteractions',
          JSON.stringify(window.filterInteractions)
        );
      }
    } catch (error) {
      console.error('Failed to update filtered results:', error);
    }
  };

  useEffect(() => {
    // Convert price range to match FilterInteractions structure
    const priceRangeForInteractions = filters.priceRange.length > 0 
      ? filters.priceRange 
      : [];
  
    // Update filter interactions for each filter
    const updatedResults = updateFilterInteractions('priceRange', priceRangeForInteractions, allPhones);
    updateFilterInteractions('brand', filters.brand, allPhones);
    updateFilterInteractions('primaryCamera', filters.primaryCamera, allPhones);
    updateFilterInteractions('features', filters.features, allPhones);
    updateFilterInteractions('batteryLife', filters.batteryLife, allPhones);
    updateFilterInteractions('screenSize', filters.screenSize, allPhones);
    updateFilterInteractions('storage', filters.storage, allPhones);
    updateFilterInteractions('ram', filters.ram, allPhones);
    updateFilterInteractions('screenResolution', filters.screenResolution, allPhones);
    updateFilterInteractions('dimensions', filters.dimensions, allPhones);
    updateFilterInteractions('releaseYear', filters.releaseYear, allPhones);
    updateFilterInteractions('searchQuery', filters.searchQuery, allPhones);
    updateFilterInteractions('sortBy', sortOption, allPhones);
  
    // Update filtered results
    setFilteredResults(updatedResults);
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
    sortOption
  ]);

  return {
    sortOption,
    setSortOption: updateSortOption,
    filteredResults,
    updateFilteredResults
  };
};