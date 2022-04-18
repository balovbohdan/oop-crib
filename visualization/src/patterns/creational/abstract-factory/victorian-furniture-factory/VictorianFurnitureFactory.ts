import FurnitureFactory from '../FurnitureFactory';
import VictorianChair from './VictorianChair';
import VictorianSofa from './VictorianSofa';

class FictorianFurnitureFactory implements FurnitureFactory {
  createChair(complexity: number, cost: number): VictorianChair {
    return new VictorianChair(complexity, cost);
  }

  createSofa(complexity: number, cost: number): VictorianSofa {
    return new VictorianSofa(complexity, cost);
  }
}

export default FictorianFurnitureFactory;
