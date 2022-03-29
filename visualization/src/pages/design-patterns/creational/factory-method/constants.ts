import shipImage from './ship.svg';
import truckImage from './truck.svg';
import bicycleImage from './bicycle.svg';

console.log(bicycleImage)

export const VEHICLES = {
  SHIP: 'ship',
  TRUCK: 'truck',
  BICYCLE: 'bicycle',
};

export const FACTORY_LOCATIONS = {
  UKRAINE: 'Ukraine',
  UNITED_KINGDOM: 'United Kingdom',
  NORWAY: 'Norway',
};

export const BUSINESS_TYPES = {
  PIZZA_DELIVERY: 'Pizza Delivery',
  BRICKS_DELIVERY: 'Bricks Delivery',
  OTHER: 'Other',
};

export const BUSINESS_TYPES_TO_VEHICLES = {
  [BUSINESS_TYPES.PIZZA_DELIVERY]: [VEHICLES.BICYCLE],
  [BUSINESS_TYPES.BRICKS_DELIVERY]: [VEHICLES.SHIP, VEHICLES.TRUCK],
  [BUSINESS_TYPES.OTHER]: [VEHICLES.SHIP, VEHICLES.TRUCK, VEHICLES.BICYCLE],
};

export const VEHICLES_TO_IMAGES = {
  [VEHICLES.SHIP]: shipImage,
  [VEHICLES.TRUCK]: truckImage,
  [VEHICLES.BICYCLE]: bicycleImage,
};

export const TABS = {
  UML: 'UML',
  PLAIN_VEHICLE: 'PLAIN_VEHICLE',
};
