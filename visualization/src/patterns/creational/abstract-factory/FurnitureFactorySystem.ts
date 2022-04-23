import FurnitureFactory from './FurnitureFactory';
import ModernFurnitureFactory from './modern-furniture-factory';
import VictorianFurnitureFactory from './victorian-furniture-factory';
import { DeliveryLocation } from './types';

class FurnitureFactorySystem {
  private readonly furnitureFactory: FurnitureFactory;

  constructor(style: string) {
    this.furnitureFactory = FurnitureFactorySystem.createFurnitureFactory(style);
  }

  static createFurnitureFactory(style: string): FurnitureFactory {
    switch (style) {
      case 'modern':
        return new ModernFurnitureFactory();
      case 'victorian':
        return new VictorianFurnitureFactory();
      default:
        return new ModernFurnitureFactory();
    }
  }

  createChair(complexity: number, cost: number, deliveryLocation: DeliveryLocation) {
    return this.furnitureFactory.createChair(complexity, cost, deliveryLocation);
  }

  createSofa(complexity: number, cost: number, deliveryLocation: DeliveryLocation) {
    return this.furnitureFactory.createSofa(complexity, cost, deliveryLocation);
  }
}

export default FurnitureFactorySystem;
