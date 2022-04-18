import FurnitureFactory from '../FurnitureFactory';
import ModernChair from './ModernChair';
import ModernSofa from './ModernSofa';

class ModernFurnitureFactory implements FurnitureFactory {
  createChair(complexity: number, cost: number): ModernChair {
    return new ModernChair(complexity, cost);
  }

  createSofa(complexity: number, cost: number): ModernSofa {
    return new ModernSofa(complexity, cost);
  }
}

export default ModernFurnitureFactory;
