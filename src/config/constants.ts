export const ITEMS_PER_PAGE = 9;

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
  ]
};
