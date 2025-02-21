export const getFilterCounts = {
  brand: (phones: any[], brand: string) => {
    return phones.filter(phone => phone.brand === brand).length;
  },
  
  priceRange: (phones: any[], range: string) => {
    const [min, max] = range.replace(/[^0-9-]/g, '').split('-').map(Number);
    return phones.filter(phone => {
      const price = phone.price;
      if (range.includes('+')) {
        return price >= min;
      }
      return price >= min && price <= max;
    }).length;
  },
  
  primaryCamera: (phones: any[], camera: string) => {
    return phones.filter(phone => phone.primaryCamera === camera).length;
  },
  
  features: (phones: any[], feature: string) => {
    return phones.filter(phone => phone.features.includes(feature)).length;
  },
  
  batteryLife: (phones: any[], battery: string) => {
    return phones.filter(phone => phone.batteryLife === battery).length;
  },
  
  screenSize: (phones: any[], size: string) => {
    return phones.filter(phone => phone.screenSize === size).length;
  },
  
  dimensions: (phones: any[], dimension: string) => {
    return phones.filter(phone => phone.dimensions === dimension).length;
  },
  
  storage: (phones: any[], storage: string) => {
    return phones.filter(phone => phone.storage === storage).length;
  },
  
  ram: (phones: any[], ram: string) => {
    return phones.filter(phone => phone.ram === ram).length;
  },
  
  screenResolution: (phones: any[], resolution: string) => {
    return phones.filter(phone => phone.screenResolution === resolution).length;
  },
  
  releaseYear: (phones: any[], year: string) => {
    return phones.filter(phone => phone.releaseYear.toString() === year).length;
  }
};
