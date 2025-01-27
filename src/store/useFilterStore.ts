import { create } from 'zustand';

export interface FilterState {
  brand: string[];
  priceRange: { min: number; max: number } | null;
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
  const storedInteractions = localStorage.getItem('filterInteractions');
  if (storedInteractions) {
    try {
      const parsed = JSON.parse(storedInteractions);
      return {
        brand: parsed.brand || [],
        priceRange: parsed.priceRange?.min_price !== null ? {
          min: parsed.priceRange.min_price,
          max: parsed.priceRange.max_price
        } : null,
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
  priceRange: null,
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
  setFilter: (key, value) => set((state) => ({ ...state, [key]: value })),
  resetFilters: () => {
    localStorage.removeItem('filterInteractions');
    set(getDefaultState());
  },
}));