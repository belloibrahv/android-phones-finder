import { Phone } from '../types/phone';
import { faker } from '@faker-js/faker';
import { FILTER_OPTIONS } from '../config/constants';

export const generateMockPhones = (count: number): Phone[] => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: `${faker.company.name()} ${faker.number.int({ min: 1, max: 20 })}`,
    brand: faker.helpers.arrayElement(FILTER_OPTIONS.brands),
    price: faker.number.int({ min: 300, max: 1500 }),
    primaryCamera: faker.helpers.arrayElement(FILTER_OPTIONS.primaryCamera),
    features: faker.helpers.arrayElements(FILTER_OPTIONS.features, { min: 2, max: 5 }),
    batteryLife: faker.helpers.arrayElement(FILTER_OPTIONS.batteryLife),
    screenSize: faker.helpers.arrayElement(FILTER_OPTIONS.screenSizes),
    imageUrl: `/api/placeholder/300/600`,
    isNew: faker.datatype.boolean(),
  }));
};
