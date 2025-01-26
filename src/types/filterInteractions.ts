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
  dimensions: string; 
  storage: string[];   
  ram: string[];      
  screenResolution: string;  
  releaseYear: number;       
}

export interface FilterInteractions {
  priceRange: { min_price: number | null; max_price: number | null };
  brand: string[];
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
  sortBy: string;
  results: FilterInteractionResults[];
}

// Initialize the global variable with proper type checking
declare global {
  interface Window {
    filterInteractions: FilterInteractions;
  }
}
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
  storage: string[];
  ram: string[];
  screenResolution: string[];
  dimensions: string[];
  releaseYear: string[];
  searchQuery: string;
  sortBy: string;
  results: FilterInteractionResults[];
}

// Initialize the global variable with proper type checking
declare global {
  interface Window {
    filterInteractions: FilterInteractions;
  }
}
