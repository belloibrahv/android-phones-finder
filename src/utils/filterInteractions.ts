import { FilterInteractionResults, FilterInteractions } from "@/types/filterInteractions";

export const initializeFilterInteractions = (): void => {
  window.filterInteractions = {
    priceRange: {
      min_price: null,
      max_price: null,
    },
    brand: [],
    primaryCamera: [],
    features: [],
    batteryLife: [],
    screenSize: [],
    searchQuery: '',
    results: [],
  };
};

export const updateFilterInteractions = (
  filterKey: keyof Omit<FilterInteractions, 'results'>,
  value: any,
  filteredResults: FilterInteractionResults[]
): void => {
  // Update the specific filter
  if (filterKey === 'priceRange') {
    window.filterInteractions.priceRange = {
      min_price: value?.min || null,
      max_price: value?.max || null,
    };
  } else {
    window.filterInteractions[filterKey] = value;
  }
  
  // Update results array with sorted data
  window.filterInteractions.results = [...filteredResults].sort((a, b) => {
    // Sort by brand first
    const brandCompare = a.brand.localeCompare(b.brand);
    if (brandCompare !== 0) return brandCompare;
    
    // Then by price
    return a.price - b.price;
  });
};
