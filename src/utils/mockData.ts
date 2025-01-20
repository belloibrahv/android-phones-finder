import { Phone } from '../types/phone';
import { faker } from '@faker-js/faker';
import { FILTER_OPTIONS } from '../config/constants';
import { PHONE_IMAGES } from '../config/phoneImages';

export const generateMockPhones = (count: number): Phone[] => {
  return Array.from({ length: count }, () => {
    // First, select a brand
    const brand = faker.helpers.arrayElement(FILTER_OPTIONS.brands);
    
    // Then, select a phone model from that brand's available models
    const phoneModel = faker.helpers.arrayElement(PHONE_IMAGES[brand as keyof typeof PHONE_IMAGES]);

    return {
      id: faker.string.uuid(),
      name: phoneModel.name,
      brand,
      price: faker.number.int({ min: 300, max: 1500 }),
      primaryCamera: faker.helpers.arrayElement(FILTER_OPTIONS.primaryCamera),
      features: faker.helpers.arrayElements(FILTER_OPTIONS.features, { min: 2, max: 5 }),
      batteryLife: faker.helpers.arrayElement(FILTER_OPTIONS.batteryLife),
      screenSize: faker.helpers.arrayElement(FILTER_OPTIONS.screenSizes),
      imageUrl: phoneModel.image,
      isNew: faker.datatype.boolean(),
    };
  });
};
