import Sofa from '../Sofa';
import { SerializedFurnitureProduct, DeliveryLocation } from '../types';

class VictorianSofa implements Sofa {
  readonly complexity: number;
  readonly cost: number;
  readonly deliveryLocation: DeliveryLocation;

  constructor(complexity: number, cost: number, deliveryLocation: DeliveryLocation) {
    this.complexity = complexity;
    this.cost = cost;
    this.deliveryLocation = deliveryLocation;
  }

  create(): Promise<void> {
    const timeout = this.complexity * 1000;

    console.log(`Creating victorian sofa... Complexity: ${this.complexity}. Cost: ${this.cost}$.`);

    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Your victorian sofa is ready!');
        resolve();
      }, timeout);
    });
  }

  serialize(): SerializedFurnitureProduct {
    return {
      type: 'sofa',
      style: 'victorian',
      complexity: this.complexity,
      cost: this.cost,
      deliveryLocation: this.deliveryLocation,
    };
  }
}

export default VictorianSofa;
