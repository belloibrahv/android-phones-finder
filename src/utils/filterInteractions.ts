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
      sortBy: 'price-asc',
      results: []
    };
  }
};

export const updateFilterInteractions = <T>(
  filterName: keyof FilterInteractions,
  value: T,
  results: FilterInteractionResults[]
) => {
  if (window.filterInteractions) {
    window.filterInteractions = {
      ...window.filterInteractions,
      [filterName]: value,
      results
    };
    
    // Store in sessionStorage
    sessionStorage.setItem(
      'filterInteractions',
      JSON.stringify(window.filterInteractions)
    );
  }
};
