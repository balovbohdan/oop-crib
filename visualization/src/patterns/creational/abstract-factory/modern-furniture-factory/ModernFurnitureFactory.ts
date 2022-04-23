import FurnitureFactory from '../FurnitureFactory';
import ModernChair from './ModernChair';
import ModernSofa from './ModernSofa';
import { DeliveryLocation } from '../types';

class ModernFurnitureFactory implements FurnitureFactory {
  createChair(complexity: number, cost: number, deliveryLocation: DeliveryLocation): ModernChair {
    return new ModernChair(complexity, cost, deliveryLocation);
  }

  createSofa(complexity: number, cost: number, deliveryLocation: DeliveryLocation): ModernSofa {
    return new ModernSofa(complexity, cost, deliveryLocation);
  }
}

export default ModernFurnitureFactory;
