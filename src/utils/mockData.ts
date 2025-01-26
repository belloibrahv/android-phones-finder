import { Phone } from '../types/phone';

// Image Imports
import GooglePixel6 from '../assets/images/GooglePixel6.jpg';
import GooglePixel7Pro from '../assets/images/GooglePixel7Pro.jpg';
import GooglePixel8Pro from '../assets/images/Google Pixel 8a.jpg';
import GooglePixel8 from '../assets/images/GooglePixel8.jpg'
import GooglePixel9Pro from '../assets/images/GooglePixel9Pro.jpg';
import GooglePixel10Pro from '../assets/images/Google-Pixel-10.webp';

import SamsungUtraS24 from '../assets/images/Samsung Galaxy S24 Ultra.jpg';
import SamsungS23Ultra from '../assets/images/Samsung Galaxy S24 Plus.jpg';
import SamsungA54 from '../assets/images/Samsung Galaxy S24 Plus.jpg';
import SamsungUtraS25 from '../assets/images/SamsungUtraS25.jpg';
import SamsungFlip6 from '../assets/images/SamsungFlip6.jpg';
import SamsungFold6 from '../assets/images/SamsungFold6.jpg';
import SamsungS24Plus from '../assets/images/SamsungS24Plus.jpg';
import SamsungA55 from '../assets/images/SamsungA55.jpg';
import SamsungFlip5 from '../assets/images/SamsungFlip5.jpg';

import Xiaomi14Ultra from '../assets/images/Xiaomi 14 Ultra.jpg';
import Xiaomi14 from '../assets/images/Xiaomi Redmi Note 14 Pro Plus 5G.jpg';
import XiaomiRedmiNote13Pro from '../assets/images/XiaomiRedmiNote13Pro.jpg';
import Xiaomi14Pro from '../assets/images/Xiaomi14Pro.jpg';
import XiaomiRedmiK60Ultra from '../assets/images/XiaomiRedmiK60Ultra.jpg';
import XiaomiRedmiNote13ProPlus from '../assets/images/XiaomiRedmiNote13ProPlus.jpg';
import XiaomiCivi4Pro from '../assets/images/XiaomiCivi4Pro.jpg';
import XiaomiRedmiK70Ultra from '../assets/images/XiaomiRedmiK70Ultra.jpg';
import Xiaomi14TPro from '../assets/images/Xiaomi14Pro.jpg';
import XiaomiPad6Max from '../assets/images/XiaomiPad6Max.jpg';

import OnePlus12 from '../assets/images/OnePlus 12.jpg';
import OnePlus12R from '../assets/images/OnePlus 12R.jpg';
import OnePlus11 from '../assets/images/OnePlus 12.jpg';

import MotorolaEdge40Pro from '../assets/images/Motorola Edge 40 Pro.jpg';
import MotorolaEdge40 from '../assets/images/Motorola Edge 40 Pro.jpg';
import MotorolaRazr40 from '../assets/images/Motorola Edge 40 Pro.jpg';

export const MOCK_PHONES: Phone[] = [
  // Google Phones
  {
    id: 'pixel-6-001',
    name: 'Google Pixel 6',
    brand: 'Google',
    price: 599,
    primaryCamera: '50MP',
    features: ['5G', 'Wireless charging', 'Fast charging'],
    batteryLife: 'Up to 24 hours',
    screenSize: '6" - 6.5"',
    imageUrl: GooglePixel6,
    isNew: false,
    dimensions: 'Standard',
    storage: ['128GB', '256GB', '62GB'],
    ram: ['8GB', '16GB'],
    screenResolution: 'FHD+',
    releaseYear: 2021
  },
  {
    id: 'pixel-7-pro-001',
    name: 'Google Pixel 7 Pro',
    brand: 'Google',
    price: 799,
    primaryCamera: '50MP',
    features: ['5G', 'Wireless charging', 'Water resistant'],
    batteryLife: '24-48 hours',
    screenSize: 'Over 6.5"',
    imageUrl: GooglePixel7Pro,
    isNew: false,
    dimensions: 'Large',
    storage: ['128GB'],
    ram: ['16GB'],
    screenResolution: 'QHD+',
    releaseYear: 2022
  },
  {
    id: 'pixel-9-pro-001',
    name: 'Google Pixel 9 Pro',
    brand: 'Google',
    price: 1099,
    primaryCamera: '50MP',
    features: ['5G', 'Wireless charging', 'Water resistant', 'Fast charging'],
    batteryLife: 'Over 48 hours',
    screenSize: 'Over 6.5"',
    imageUrl: GooglePixel9Pro,
    isNew: true,
    dimensions: 'Large',
    storage: ['128GB', '256GB', '62GB'],
    ram: ['8GB', '32GB'],
    screenResolution: '4K',
    releaseYear: 2024
  },

  {
    id: 'pixel-10-pro-001',
    name: 'Google Pixel 10 Pro',
    brand: 'Google',
    price: 1199,
    primaryCamera: '64MP',
    features: ['5G', 'Wireless charging', 'Water resistant', 'Face unlock', 'Fast charging'],
    batteryLife: 'Over 48 hours',
    screenSize: 'Over 6.5"',
    imageUrl: GooglePixel10Pro,
    isNew: true,
    dimensions: 'Large',
    storage: ['128GB', '256GB', '512GB'],
    ram: ['8GB', '16GB', '32GB'],
    screenResolution: '4K',
    releaseYear: 2025
  },
  {
    id: 'pixel-8-001',
    name: 'Google Pixel 8',
    brand: 'Google',
    price: 699,
    primaryCamera: '50MP',
    features: ['5G', 'Fast charging', 'Face unlock'],
    batteryLife: 'Up to 24 hours',
    screenSize: '6" - 6.5"',
    imageUrl: GooglePixel8,
    isNew: true,
    dimensions: 'Standard',
    storage: ['128GB', '256GB'],
    ram: ['8GB', '16GB'],
    screenResolution: 'QHD+',
    releaseYear: 2024
  },

  {
    id: 'pixel-8-pro-001',
    name: 'Google Pixel 8 Pro',
    brand: 'Google',
    price: 1199,
    primaryCamera: '50MP',
    features: ['5G', 'AI-enhanced photography', 'Wireless charging', 'Water resistant'],
    batteryLife: 'Over 48 hours',
    screenSize: 'Over 6.5"',
    imageUrl: GooglePixel8Pro,
    isNew: true,
    dimensions: 'Large',
    storage: ['128GB', '256GB', '512GB', '1TB'],
    ram: ['12GB', '16GB'],
    screenResolution: '4K',
    releaseYear: 2024
  },

  // Samsung Phones
  {
    id: 's24-ultra-001',
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    price: 1299,
    primaryCamera: 'Over 108MP',
    features: ['5G', 'Wireless charging', 'Water resistant', 'Dual SIM'],
    batteryLife: 'Over 48 hours',
    screenSize: 'Over 6.5"',
    imageUrl: SamsungUtraS24,
    isNew: true,
    dimensions: 'Large',
    storage: ['128GB'],
    ram: ['8GB', '16GB', '32GB'],
    screenResolution: '4K',
    releaseYear: 2024
  },
  {
    id: 's23-ultra-001',
    name: 'Samsung Galaxy S23 Ultra',
    brand: 'Samsung',
    price: 1099,
    primaryCamera: 'Over 108MP',
    features: ['5G', 'Wireless charging', 'Water resistant'],
    batteryLife: '24-48 hours',
    screenSize: 'Over 6.5"',
    imageUrl: SamsungS23Ultra,
    isNew: false,
    dimensions: 'Large',
    storage: ['128GB', '256GB', '62GB', '1TB'],
    ram: ['8GB', '16GB', '32GB', '64GB',  '1TB'],
    screenResolution: 'QHD+',
    releaseYear: 2023
  },
  {
    id: 'galaxy-a54-001',
    name: 'Samsung Galaxy A54',
    brand: 'Samsung',
    price: 449,
    primaryCamera: '64MP',
    features: ['5G', 'Water resistant'],
    batteryLife: 'Up to 24 hours',
    screenSize: '6" - 6.5"',
    imageUrl: SamsungA54,
    isNew: false,
    dimensions: 'Standard',
    storage: ['128GB', '256GB', '62GB'],
    ram: ['6GB', '8GB'],
    screenResolution: 'FHD+',
    releaseYear: 2023
  },

  {
    id: 's25-ultra-001',
    name: 'Samsung Galaxy S25 Ultra',
    brand: 'Samsung',
    price: 1399,
    primaryCamera: '200MP',
    features: ['5G', 'Wireless charging', 'Water resistant', 'Dual SIM', 'S Pen'],
    batteryLife: 'Over 48 hours',
    screenSize: 'Over 6.5"',
    imageUrl: SamsungUtraS25,
    isNew: true,
    dimensions: 'Large',
    storage: ['128GB', '256GB', '512GB', '1TB'],
    ram: ['16GB', '32GB', '64GB'],
    screenResolution: '4K',
    releaseYear: 2025
  },
  {
    id: 'galaxy-flip-6-001',
    name: 'Samsung Galaxy Z Flip 6',
    brand: 'Samsung',
    price: 999,
    primaryCamera: '12MP',
    features: ['5G', 'Wireless charging', 'Water resistant', 'Foldable'],
    batteryLife: 'Up to 24 hours',
    screenSize: '6" - 6.5" (unfolded)',
    imageUrl: SamsungFlip6,
    isNew: true,
    dimensions: 'Compact',
    storage: ['256GB', '512GB'],
    ram: ['8GB', '16GB'],
    screenResolution: 'FHD+',
    releaseYear: 2024
  },
  {
    id: 'galaxy-fold-6-001',
    name: 'Samsung Galaxy Z Fold 6',
    brand: 'Samsung',
    price: 1799,
    primaryCamera: '50MP',
    features: ['5G', 'Wireless charging', 'Water resistant', 'Foldable'],
    batteryLife: 'Up to 48 hours',
    screenSize: 'Over 7.5" (unfolded)',
    imageUrl: SamsungFold6,
    isNew: true,
    dimensions: 'Large',
    storage: ['256GB', '512GB', '1TB'],
    ram: ['12GB', '16GB', '32GB'],
    screenResolution: 'QHD+',
    releaseYear: 2025
  },

  {
    id: 's24-plus-001',
    name: 'Samsung Galaxy S24 Plus',
    brand: 'Samsung',
    price: 1099,
    primaryCamera: '50MP',
    features: ['5G', 'AI features', 'Wireless charging', 'Water resistant'],
    batteryLife: 'Over 36 hours',
    screenSize: 'Over 6.5"',
    imageUrl: SamsungS24Plus,
    isNew: true,
    dimensions: 'Large',
    storage: ['256GB', '512GB', '1TB'],
    ram: ['12GB', '16GB'],
    screenResolution: 'QHD+',
    releaseYear: 2024
  },
  {
    id: 'galaxy-a55-001',
    name: 'Samsung Galaxy A55',
    brand: 'Samsung',
    price: 499,
    primaryCamera: '64MP',
    features: ['5G', 'Water resistant', 'Long battery life'],
    batteryLife: 'Up to 24 hours',
    screenSize: '6" - 6.5"',
    imageUrl: SamsungA55,
    isNew: true,
    dimensions: 'Standard',
    storage: ['128GB', '256GB'],
    ram: ['6GB', '8GB'],
    screenResolution: 'FHD+',
    releaseYear: 2024
  },
  {
    id: 'galaxy-z-flip-5-001',
    name: 'Samsung Galaxy Z Flip 5',
    brand: 'Samsung',
    price: 999,
    primaryCamera: '12MP',
    features: ['5G', 'Foldable design', 'Compact', 'Water resistant'],
    batteryLife: 'Up to 24 hours',
    screenSize: '6.7" (unfolded)',
    imageUrl: SamsungFlip5,
    isNew: true,
    dimensions: 'Compact',
    storage: ['256GB', '512GB'],
    ram: ['8GB', '12GB'],
    screenResolution: 'FHD+',
    releaseYear: 2024
  },

  // Xiaomi Phones
  {
    id: 'xiaomi-14-ultra-001',
    name: 'Xiaomi 14 Ultra',
    brand: 'Xiaomi',
    price: 1199,
    primaryCamera: 'Over 108MP',
    features: ['5G', 'Fast charging', 'Wireless charging'],
    batteryLife: '24-48 hours',
    screenSize: 'Over 6.5"',
    imageUrl: Xiaomi14Ultra,
    isNew: true,
    dimensions: 'Large',
    storage: ['128GB', '256GB'],
    ram: ['8GB', '16GB', '32GB'],
    screenResolution: 'QHD+',
    releaseYear: 2024
  },
  {
    id: 'xiaomi-14-001',
    name: 'Xiaomi 14',
    brand: 'Xiaomi',
    price: 899,
    primaryCamera: '50MP',
    features: ['5G', 'Fast charging'],
    batteryLife: 'Up to 24 hours',
    screenSize: '6" - 6.5"',
    imageUrl: Xiaomi14,
    isNew: true,
    dimensions: 'Standard',
    storage: ['128GB'],
    ram: ['8GB'],
    screenResolution: 'FHD+',
    releaseYear: 2024
  },
  {
    id: 'redmi-note-13-pro-001',
    name: 'Xiaomi Redmi Note 13 Pro',
    brand: 'Xiaomi',
    price: 349,
    primaryCamera: '200MP',
    features: ['5G'],
    batteryLife: 'Up to 24 hours',
    screenSize: '6" - 6.5"',
    imageUrl: XiaomiRedmiNote13Pro,
    isNew: false,
    dimensions: 'Standard',
    storage: ['128GB', '256GB', '62GB'],
    ram: ['8GB', '16GB', '32GB', '64GB', '128GB'],
    screenResolution: 'FHD+',
    releaseYear: 2023
  },

  {
    id: 'xiaomi-14-pro-001',
    name: 'Xiaomi 14 Pro',
    brand: 'Xiaomi',
    price: 999,
    primaryCamera: '50MP + 50MP + 50MP',
    features: ['5G', 'Wireless charging', 'Fast charging', 'Water resistant'],
    batteryLife: 'Over 48 hours',
    screenSize: 'Over 6.5"',
    imageUrl: Xiaomi14Pro,
    isNew: true,
    dimensions: 'Large',
    storage: ['128GB', '256GB', '512GB', '1TB'],
    ram: ['12GB', '16GB'],
    screenResolution: '2K AMOLED',
    releaseYear: 2024
  },
  {
    id: 'redmi-k60-ultra-001',
    name: 'Xiaomi Redmi K60 Ultra',
    brand: 'Xiaomi',
    price: 599,
    primaryCamera: '64MP + 8MP + 2MP',
    features: ['5G', 'Fast charging', '120Hz display'],
    batteryLife: '24-48 hours',
    screenSize: '6.67"',
    imageUrl: XiaomiRedmiK60Ultra,
    isNew: true,
    dimensions: 'Standard',
    storage: ['256GB', '512GB'],
    ram: ['12GB', '16GB'],
    screenResolution: '1.5K AMOLED',
    releaseYear: 2024
  },
  {
    id: 'redmi-note-13-pro-plus-001',
    name: 'Xiaomi Redmi Note 13 Pro+',
    brand: 'Xiaomi',
    price: 399,
    primaryCamera: '200MP + 8MP + 2MP',
    features: ['5G', 'Fast charging', '120Hz display'],
    batteryLife: '24-48 hours',
    screenSize: '6.67"',
    imageUrl: XiaomiRedmiNote13ProPlus,
    isNew: true,
    dimensions: 'Standard',
    storage: ['256GB', '512GB'],
    ram: ['12GB', '16GB'],
    screenResolution: 'FHD+ AMOLED',
    releaseYear: 2024
  },

  {
    id: 'xiaomi-civi-4-pro-001',
    name: 'Xiaomi Civi 4 Pro',
    brand: 'Xiaomi',
    price: 799,
    primaryCamera: '50MP',
    features: ['5G', 'AI photography', 'Slim design', 'Fast charging'],
    batteryLife: 'Up to 24 hours',
    screenSize: '6.55"',
    imageUrl: XiaomiCivi4Pro,
    isNew: true,
    dimensions: 'Compact',
    storage: ['128GB', '256GB', '512GB'],
    ram: ['8GB', '12GB'],
    screenResolution: 'QHD+',
    releaseYear: 2024
  },

  {
    id: 'xiaomi-14t-pro-001',
    name: 'Xiaomi 14T Pro',
    brand: 'Xiaomi',
    price: 1099,
    primaryCamera: '200MP',
    features: ['5G', 'Fast charging', 'Wireless charging', '120Hz display'],
    batteryLife: 'Over 48 hours',
    screenSize: '6.67"',
    imageUrl: Xiaomi14TPro,
    isNew: true,
    dimensions: 'Large',
    storage: ['256GB', '512GB', '1TB'],
    ram: ['12GB', '16GB'],
    screenResolution: '2K AMOLED',
    releaseYear: 2025
  },
  {
    id: 'redmi-k70-ultra-001',
    name: 'Xiaomi Redmi K70 Ultra',
    brand: 'Xiaomi',
    price: 649,
    primaryCamera: '64MP + 8MP + 2MP',
    features: ['5G', 'Fast charging', '120Hz AMOLED display', 'Gaming optimization'],
    batteryLife: '24-48 hours',
    screenSize: '6.7"',
    imageUrl: XiaomiRedmiK70Ultra,
    isNew: true,
    dimensions: 'Standard',
    storage: ['256GB', '512GB'],
    ram: ['12GB', '16GB'],
    screenResolution: 'QHD+',
    releaseYear: 2025
  },
  {
    id: 'xiaomi-pad-6-max-001',
    name: 'Xiaomi Pad 6 Max (5G)',
    brand: 'Xiaomi',
    price: 599,
    primaryCamera: '13MP',
    features: ['5G', 'Tablet', 'Fast charging', '120Hz display'],
    batteryLife: 'Over 72 hours',
    screenSize: '10.95"',
    imageUrl: XiaomiPad6Max, 
    isNew: true,
    dimensions: 'Large',
    storage: ['256GB', '512GB'],
    ram: ['8GB', '16GB'],
    screenResolution: '2.8K AMOLED',
    releaseYear: 2025
  },
  

  // OnePlus Phones
  {
    id: 'oneplus-12-001',
    name: 'OnePlus 12',
    brand: 'OnePlus',
    price: 899,
    primaryCamera: '50MP',
    features: ['5G', 'Fast charging', 'Wireless charging'],
    batteryLife: '24-48 hours',
    screenSize: 'Over 6.5"',
    imageUrl: OnePlus12,
    isNew: true,
    dimensions: 'Standard',
    storage: ['128GB', '256GB'],
    ram: ['8GB', '16GB', '32GB'],
    screenResolution: 'QHD+',
    releaseYear: 2024
  },
  {
    id: 'oneplus-12r-001',
    name: 'OnePlus 12R',
    brand: 'OnePlus',
    price: 599,
    primaryCamera: '50MP',
    features: ['5G', 'Fast charging'],
    batteryLife: 'Up to 24 hours',
    screenSize: '6" - 6.5"',
    imageUrl: OnePlus12R,
    isNew: true,
    dimensions: 'Standard',
    storage: ['128GB', '256GB', '62GB'],
    ram: ['8GB', '16GB', '32GB'],
    screenResolution: 'FHD+',
    releaseYear: 2024
  },
  {
    id: 'oneplus-11-001',
    name: 'OnePlus 11',
    brand: 'OnePlus',
    price: 699,
    primaryCamera: '50MP',
    features: ['5G', 'Fast charging'],
    batteryLife: 'Up to 24 hours',
    screenSize: '6" - 6.5"',
    imageUrl: OnePlus11,
    isNew: false,
    dimensions: 'Standard',
    storage: ['128GB','62GB'],
    ram: ['8GB', '16GB', '32GB'],
    screenResolution: 'FHD+',
    releaseYear: 2023
  },

  // Motorola Phones
  {
    id: 'motorola-edge-40-pro-001',
    name: 'Motorola Edge 40 Pro',
    brand: 'Motorola',
    price: 699,
    primaryCamera: '50MP',
    features: ['5G', 'Water resistant'],
    batteryLife: 'Up to 24 hours',
    screenSize: '6" - 6.5"',
    imageUrl: MotorolaEdge40Pro,
    isNew: false,
    dimensions: 'Standard',
    storage: ['128GB', '256GB', '62GB'],
    ram: ['8GB', '16GB', '32GB'],
    screenResolution: 'FHD+',
    releaseYear: 2023
  },
  {
    id: 'motorola-edge-40-001',
    name: 'Motorola Edge 40',
    brand: 'Motorola',
    price: 549,
    primaryCamera: '50MP',
    features: ['5G'],
    batteryLife: 'Up to 24 hours',
    screenSize: '6" - 6.5"',
    imageUrl: MotorolaEdge40,
    isNew: false,
    dimensions: 'Standard',
    storage: ['128GB', '256GB', '62GB'],
    ram: ['8GB'],
    screenResolution: 'FHD+',
    releaseYear: 2023
  },
  {
    id: 'motorola-razr-40-001',
    name: 'Motorola Razr 40',
    brand: 'Motorola',
    price: 599,
    primaryCamera: '64MP',
    features: ['5G'],
    batteryLife: 'Up to 24 hours',
    screenSize: '6" - 6.5"',
    imageUrl: MotorolaRazr40,
    isNew: true,
    dimensions: 'Compact',
    storage: ['128GB', '256GB'],
    ram: ['8GB', '16GB'],
    screenResolution: 'FHD+',
    releaseYear: 2024
  }
];

export const generateMockPhones = (): Phone[] => {
  return MOCK_PHONES;
};