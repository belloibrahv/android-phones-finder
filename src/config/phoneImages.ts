import GooglePixel8a from '../assets/images/Google Pixel 8a.jpg';
import GooglePixel9 from '../assets/images/google-pixel-9-pro.jpg';
import SamsungUtraS24 from '../assets/images/Samsung Galaxy S24 Ultra.jpg';
import SamsungPlusS24 from '../assets/images/Samsung Galaxy S24 Plus.jpg';
import Xiaomi14Ultra from '../assets/images/Xiaomi 14 Ultra.jpg';
import Xiaomi14 from '../assets/images/Xiaomi Redmi Note 14 Pro Plus 5G.jpg';
import OnePlus12 from '../assets/images/OnePlus 12.jpg';
import OnePlus12R from '../assets/images/OnePlus 12R.jpg';
import MotorolaEdge40Pro from '../assets/images/Motorola Edge 40 Pro.jpg';
import MotorolaEdge40 from '../assets/images/Motorola Edge 40 Pro.jpg';

export const PHONE_IMAGES = {
  Google: [
    {
      name: 'Google Pixel 8a',
      image: GooglePixel8a
    },
    {
      name: 'Google Pixel 9 Pro',
      image: GooglePixel9,
    }
  ],
  Samsung: [
    {
      name: 'Samsung Galaxy S24 Ultra',
      image: SamsungUtraS24
    },
    {
      name: 'Samsung Galaxy S24+',
      image: SamsungPlusS24,
    }
  ],
  Xiaomi: [
    {
      name: 'Xiaomi 14 Ultra',
      image: Xiaomi14Ultra,
    },
    {
      name: 'Xiaomi 14',
      image: Xiaomi14,
    }
  ],
  OnePlus: [
    {
      name: 'OnePlus 12',
      image: OnePlus12, 
    },
    {
      name: 'OnePlus 12R',
      image: OnePlus12R
    }
  ],
  Motorola: [
    {
      name: 'Motorola Edge 40 Pro',
      image: MotorolaEdge40Pro, 
    },
    {
      name: 'Motorola Edge 40',
      image: MotorolaEdge40,
    }
  ]
} as const;
