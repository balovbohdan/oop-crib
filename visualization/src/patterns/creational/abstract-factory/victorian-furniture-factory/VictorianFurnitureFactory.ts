import FurnitureFactory from '../FurnitureFactory';
import VictorianChair from './VictorianChair';
import VictorianSofa from './VictorianSofa';
import { DeliveryLocation } from '../types';

class FictorianFurnitureFactory implements FurnitureFactory {
  createChair(complexity: number, cost: number, deliveryLocation: DeliveryLocation): VictorianChair {
    return new VictorianChair(complexity, cost, deliveryLocation);
  }

  createSofa(complexity: number, cost: number, deliveryLocation: DeliveryLocation): VictorianSofa {
    return new VictorianSofa(complexity, cost, deliveryLocation);
  }
}

export default FictorianFurnitureFactory;
