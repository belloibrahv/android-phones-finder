import { FilterInteractionResults, FilterInteractions } from "@/types/filterInteractions";
import { Phone } from "@/types/phone";

export const initializeFilterInteractions = () => {
  if (!window.filterInteractions) {
    const storedInteractions = localStorage.getItem('filterInteractions');
    
    if (storedInteractions) {
      try {
        window.filterInteractions = JSON.parse(storedInteractions);
      } catch (error) {
        console.error('Error parsing stored filter interactions:', error);
        setDefaultInteractions();
      }
    } else {
      setDefaultInteractions();
    }
  }
  
  return window.filterInteractions;
};

const setDefaultInteractions = () => {
  window.filterInteractions = {
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
    sortBy: 'release-date',
    results: []
  };
};

export const updateFilterInteractions = <T extends FilterInteractions[keyof FilterInteractions]>(
  filterName: keyof FilterInteractions,
  value: T,
  allPhones: Phone[]
): FilterInteractionResults[] => {
  if (!window.filterInteractions) {
    initializeFilterInteractions();
  }

  // Update the specific filter
  window.filterInteractions = {
    ...window.filterInteractions,
    [filterName]: value
  };

  // Apply all filters to get updated results
  const filteredResults = filterPhones(allPhones, window.filterInteractions);

  // Update results
  window.filterInteractions.results = filteredResults;

  // Store in localStorage for persistence
  try {
    localStorage.setItem('filterInteractions', JSON.stringify(window.filterInteractions));
  } catch (error) {
    console.error('Failed to save filter interactions:', error);
  }

  return filteredResults;
};

const filterPhones = (phones: Phone[], filters: FilterInteractions): FilterInteractionResults[] => {
  return phones.filter(phone => {
    const matchesSearch = !filters.searchQuery || 
      phone.name.toLowerCase().includes(filters.searchQuery.toLowerCase());
    
    const matchesBrand = filters.brand.length === 0 || 
      filters.brand.includes(phone.brand);
    
      const matchesPrice = filters.priceRange.length === 0 || 
      filters.priceRange.some(range => {
        const [minStr, maxStr] = range.split(' - ').map(str => 
          str.replace('$', '').replace(',', '')
        );
        const min = parseFloat(minStr);
        const max = maxStr === "+" ? Infinity : parseFloat(maxStr);
        return phone.price >= min && phone.price <= max;
      });
    
    const matchesCamera = filters.primaryCamera.length === 0 ||
      filters.primaryCamera.some(camera => 
        compareCamera(phone.primaryCamera, camera)
      );
    
    const matchesFeatures = filters.features.length === 0 ||
      filters.features.every(feature => phone.features.includes(feature));
    
    const matchesBattery = filters.batteryLife.length === 0 ||
      filters.batteryLife.includes(phone.batteryLife);
    
    const matchesScreenSize = filters.screenSize.length === 0 ||
      filters.screenSize.includes(phone.screenSize);

    const matchesStorage = filters.storage.length === 0 ||
      filters.storage.some(storage => phone.storage.includes(storage));
    
    const matchesRam = filters.ram.length === 0 ||
      filters.ram.some(ram => phone.ram.includes(ram));
    
    const matchesScreenResolution = filters.screenResolution.length === 0 ||
      filters.screenResolution.includes(phone.screenResolution);
    
    const matchesDimensions = filters.dimensions.length === 0 ||
      filters.dimensions.includes(phone.dimensions);
    
    const matchesReleaseYear = filters.releaseYear.length === 0 ||
      filters.releaseYear.includes(phone.releaseYear.toString());

    return matchesSearch && matchesBrand && matchesPrice && 
           matchesCamera && matchesFeatures && matchesBattery && 
           matchesScreenSize && matchesStorage && matchesRam &&
           matchesScreenResolution && matchesDimensions && matchesReleaseYear;
  }).map(phone => ({
    id: phone.id,
    name: phone.name,
    brand: phone.brand,
    price: phone.price,
    primaryCamera: phone.primaryCamera,
    features: phone.features,
    batteryLife: phone.batteryLife,
    screenSize: phone.screenSize,
    imageUrl: phone.imageUrl,
    isNew: phone.isNew,
    dimensions: phone.dimensions,   
    storage: phone.storage,
    ram: phone.ram,
    screenResolution: phone.screenResolution,
    releaseYear: phone.releaseYear
  }));
};

// Helper function to compare camera specifications
const compareCamera = (phoneCameraSpec: string, filterCameraSpec: string): boolean => {
  if (filterCameraSpec === '12MP and under') return parseInt(phoneCameraSpec) <= 12;
  if (filterCameraSpec === '13MP - 48MP') return parseInt(phoneCameraSpec) >= 13 && parseInt(phoneCameraSpec) <= 48;
  if (filterCameraSpec === '49MP - 108MP') return parseInt(phoneCameraSpec) >= 49 && parseInt(phoneCameraSpec) <= 108;
  if (filterCameraSpec === 'Over 108MP') return parseInt(phoneCameraSpec) > 108;
  return false;
};