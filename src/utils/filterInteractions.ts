import { FilterInteractionResults, FilterInteractions } from "@/types/filterInteractions";

export const initializeFilterInteractions = () => {
  // Try to get stored interactions from sessionStorage
  const storedInteractions = sessionStorage.getItem('filterInteractions');
  
  if (storedInteractions) {
    window.filterInteractions = JSON.parse(storedInteractions);
  } else {
    window.filterInteractions = {
      priceRange: { min_price: null, max_price: null },
      brand: [],
      primaryCamera: [],
      features: [],
      batteryLife: [],
      screenSize: [],
      storage: [],
      ram: [],
      screenResolution: [],
      dimensions: [],
      releaseYear: [],
      searchQuery: '',
      sortBy: 'release-date',
      results: []
    };
  }
};

export const updateFilterInteractions = <T>(
  filterName: keyof FilterInteractions,
  value: T,
  results: FilterInteractionResults[]
) => {
  if (!window.filterInteractions) {
    initializeFilterInteractions();
  }

  window.filterInteractions = {
    ...window.filterInteractions,
    [filterName]: value,
    results
  };

  // Robust sessionStorage management
  try {
    sessionStorage.setItem(
      'filterInteractions',
      JSON.stringify(window.filterInteractions)
    );
  } catch (error) {
    console.error('Failed to save filter interactions', error);
  }
};
