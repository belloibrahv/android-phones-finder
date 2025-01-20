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

    return matchesSearch && matchesBrand && matchesPrice && 
           matchesCamera && matchesFeatures && matchesBattery && matchesScreenSize;
  });
};

export const usePhoneFiltering = () => {
  const filters = useFilterStore();
  
  return useInfiniteQuery({
    queryKey: ['phones', filters],
    queryFn: ({ pageParam = 0 }) => {
      // Simulate API call with our mock data
      const allPhones = generateMockPhones(100); // Generate a large dataset
      const filteredPhones = filterPhones(allPhones, filters);
      
      const start = pageParam * ITEMS_PER_PAGE;
      const end = start + ITEMS_PER_PAGE;
      const page = filteredPhones.slice(start, end);
      
      return {
        phones: page,
        nextPage: end < filteredPhones.length ? pageParam + 1 : undefined,
        totalPhones: filteredPhones.length
      };
    },
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 0
  });
};
