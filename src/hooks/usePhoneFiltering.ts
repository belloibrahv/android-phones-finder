import { useInfiniteQuery } from '@tanstack/react-query';
import { useFilterStore } from '../store/useFilterStore';
import { generateMockPhones } from '../utils/mockData';
import { Phone } from '../types/phone';
import { ITEMS_PER_PAGE } from '../config/constants';

const filterPhones = (phones: Phone[], filters: ReturnType<typeof useFilterStore.getState>) => {
  return phones.filter(phone => {
    const matchesSearch = !filters.searchQuery || 
      phone.name.toLowerCase().includes(filters.searchQuery.toLowerCase());
    
    const matchesBrand = filters.brand.length === 0 || 
      filters.brand.includes(phone.brand);
    
    const matchesPrice = !filters.priceRange ||
      (phone.price >= filters.priceRange.min && phone.price <= filters.priceRange.max);
    
    const matchesCamera = filters.primaryCamera.length === 0 ||
      filters.primaryCamera.includes(phone.primaryCamera);
    
    const matchesFeatures = filters.features.length === 0 ||
      filters.features.every(feature => phone.features.includes(feature));
    
    const matchesBattery = filters.batteryLife.length === 0 ||
      filters.batteryLife.includes(phone.batteryLife);
    
    const matchesScreenSize = filters.screenSize.length === 0 ||
      filters.screenSize.includes(phone.screenSize);

      const matchesStorage = filters.storage.length === 0 ||
      filters.storage.some(storage => phone.storage.includes(storage));
    
    const matchesRam = filters.ram.length === 0 ||
      filters.ram.includes(phone.ram[0]);
    
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
  });
};

const sortPhones = (phones: Phone[], sortOption: string) => {
  switch (sortOption) {
    case 'release-date':
      return [...phones].sort((a, b) => b.releaseYear - a.releaseYear);
    case 'price-asc':
      return [...phones].sort((a, b) => a.price - b.price);
    case 'price-desc':
      return [...phones].sort((a, b) => b.price - a.price);
    default:
      return phones;
  }
};

export const usePhoneFiltering = (sortOption: string = 'release-date') => {
  const filters = useFilterStore();
  
  return useInfiniteQuery({
    queryKey: ['phones', filters, sortOption],
    queryFn: ({ pageParam = 0 }) => {
      // Simulate API call with our mock data
      const allPhones = generateMockPhones(100); // Generate a large dataset
      
      // Apply filters first
      const filteredPhones = filterPhones(allPhones, filters);
      
      // Then sort the filtered phones
      const sortedPhones = sortPhones(filteredPhones, sortOption);
      
      const start = pageParam * ITEMS_PER_PAGE;
      const end = start + ITEMS_PER_PAGE;
      const page = sortedPhones.slice(start, end);
      
      return {
        phones: page,
        nextPage: end < sortedPhones.length ? pageParam + 1 : undefined,
        totalPhones: sortedPhones.length
      };
    },
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 0
  });
};