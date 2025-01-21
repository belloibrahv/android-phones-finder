export interface FilterInteractionResults {
  id: string;
  name: string;
  brand: string;
  price: number;
  primaryCamera: string;
  features: string[];
  batteryLife: string;
  screenSize: string;
  imageUrl: string;
  isNew: boolean;
}

export interface FilterInteractions {
  priceRange: {
    min_price: number | null;
    max_price: number | null;
  };
  brand: string[];
  primaryCamera: string[];
  features: string[];
  batteryLife: string[];
  screenSize: string[];
  searchQuery: string;
  results: FilterInteractionResults[];
}

// Initialize the global variable with proper type checking
declare global {
  interface Window {
    filterInteractions: FilterInteractions;
  }
}
