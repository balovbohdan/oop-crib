import Chair from './Chair';
import Sofa from './Sofa';
import { DeliveryLocation } from './types';

interface FurnitureFactory {
  createChair(complexity: number, cost: number, deliveryLocation: DeliveryLocation): Chair;
  createSofa(complexity: number, cost: number, deliveryLocation: DeliveryLocation): Sofa;
}

export default FurnitureFactory;
