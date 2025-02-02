import { create } from 'zustand';

export interface FilterState {
  brand: string[];
  priceRange: string[];
  primaryCamera: string[];
  features: string[];
  batteryLife: string[];
  screenSize: string[];
  storage: string[];
  ram: string[];
  screenResolution: string[];
  dimensions: string[];
  releaseYear: string[];
  searchQuery: string;
  setFilter: <T extends keyof Omit<FilterState, 'setFilter' | 'resetFilters'>>(
    key: T,
    value: FilterState[T]
  ) => void;
  resetFilters: () => void;
}

const getInitialState = () => {
  const storedInteractions = sessionStorage.getItem('filterInteractions');
  if (storedInteractions) {
    try {
      const parsed = JSON.parse(storedInteractions);
      return {
        brand: parsed.brand || [],
        priceRange: parsed.priceRange || [],
        primaryCamera: parsed.primaryCamera || [],
        features: parsed.features || [],
        batteryLife: parsed.batteryLife || [],
        screenSize: parsed.screenSize || [],
        storage: parsed.storage || [],
        ram: parsed.ram || [],
        screenResolution: parsed.screenResolution || [],
        dimensions: parsed.dimensions || [],
        releaseYear: parsed.releaseYear || [],
        searchQuery: parsed.searchQuery || '',
      };
    } catch (error) {
      console.error('Error parsing stored filter state:', error);
      return getDefaultState();
    }
  }
  return getDefaultState();
};

const getDefaultState = () => ({
  brand: [],
  priceRange: [],
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
});

export const useFilterStore = create<FilterState>((set) => ({
  ...getInitialState(),
  setFilter: (key, value) => {
    set((state) => {
      const newState = { ...state, [key]: value };
      sessionStorage.setItem('filterState', JSON.stringify(newState));
      return newState;
    });
  },
  resetFilters: () => {
    // Clear filter state
    sessionStorage.removeItem('filterState');

    // Reset filter interactions but preserve structure
    const defaultInteractions = {
      priceRange: [],
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
      sortBy: 'release-date', // Reset sort option to default
      results: [],
    };
    sessionStorage.setItem('filterInteractions', JSON.stringify(defaultInteractions));

    // Reset state to default
    set(getDefaultState());
  },
}));