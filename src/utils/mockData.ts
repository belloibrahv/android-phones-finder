import { Phone } from '../types/phone';

// Image Imports
import GooglePixel6 from '../assets/images/GooglePixel6.webp';
import GooglePixel7Pro from '../assets/images/GooglePixel7Pro.webp';
import GooglePixel9Pro from '../assets/images/GooglePixel9Pro.webp';

import SamsungUtraS24 from '../assets/images/Samsung Galaxy S24 Ultra.jpg';
import SamsungS23Ultra from '../assets/images/Samsung Galaxy S24 Plus.jpg';
import SamsungA54 from '../assets/images/Samsung Galaxy S24 Plus.jpg';

import Xiaomi14Ultra from '../assets/images/Xiaomi 14 Ultra.jpg';
import Xiaomi14 from '../assets/images/Xiaomi Redmi Note 14 Pro Plus 5G.jpg';
import XiaomiRedmiNote13Pro from '../assets/images/Xiaomi Redmi Note 14 Pro Plus 5G.jpg';

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