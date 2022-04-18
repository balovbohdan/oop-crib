import FurnitureFactory from './FurnitureFactory';
import ModernFurnitureFactory from './modern-furniture-factory';
import VictorianFurnitureFactory from './victorian-furniture-factory';

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

  createChair(complexity: number, cost: number) {
    return this.furnitureFactory.createChair(complexity, cost);
  }

  createSofa(complexity: number, cost: number) {
    return this.furnitureFactory.createSofa(complexity, cost);
  }
}

export default FurnitureFactorySystem;
