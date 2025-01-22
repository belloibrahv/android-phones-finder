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

const initialState = {
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
};

export const useFilterStore = create<FilterState>((set) => ({
  ...initialState,
  setFilter: (key, value) => set((state) => ({ ...state, [key]: value })),
  resetFilters: () => set(initialState),
}));
