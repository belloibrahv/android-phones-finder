export const ITEMS_PER_PAGE = 9;

export const SORT_OPTIONS = [
  { value: 'price-asc', label: 'Price (low - high)' },
  { value: 'price-desc', label: 'Price (high - low)' },
  { value: 'release-date', label: 'Latest release' }
] as const;

export const FILTER_OPTIONS = {
  brands: ['Google', 'Samsung', 'Xiaomi', 'OnePlus', 'Motorola'],
  priceRanges: [
    { label: 'Under $500', min: 0, max: 500 },
    { label: '$500 - $750', min: 500, max: 750 },
    { label: '$750 - $1000', min: 750, max: 1000 },
    { label: 'Over $1000', min: 1000, max: Infinity },
  ],
  primaryCamera: [
    '12MP and under',
    '13MP - 48MP',
    '49MP - 108MP',
    'Over 108MP'
  ],
  features: [
    '5G',
    'Wireless charging',
    'Fast charging',
    'Water resistant',
    'Dual SIM'
  ],
  batteryLife: [
    'Up to 24 hours',
    '24-48 hours',
    'Over 48 hours'
  ],
  screenSizes: [
    'Under 6"',
    '6" - 6.5"',
    'Over 6.5"'
  ],
  dimensions: [
    'Standard',
    'Compact',
    'Large'
  ],
  storage: [
    '64GB',
    '128GB',
    '256GB',
    '512GB',
    '1TB'
  ],
  ram: [
    '4GB',
    '6GB',
    '8GB',
    '12GB',
    '16GB'
  ],
  screenResolution: [
    'HD+',
    'FHD+',
    'QHD+',
    '4K'
  ],
  releaseYears: [2024, 2023, 2022, 2021, 2020]
} as const;
