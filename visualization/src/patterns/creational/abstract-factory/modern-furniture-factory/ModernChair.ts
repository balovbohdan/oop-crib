import Chair from '../Chair';
import { SerializedFurnitureProduct, DeliveryLocation } from '../types';

class ModernChair implements Chair {
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

    console.log(`Creating modern chair... Complexity: ${this.complexity}. Cost: ${this.cost}$.`);

    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Your modern chair is ready!');
        resolve();
      }, timeout);
    });
  }

  serialize(): SerializedFurnitureProduct {
    return {
      type: 'chair',
      style: 'modern',
      complexity: this.complexity,
      cost: this.cost,
      deliveryLocation: this.deliveryLocation,
    };
  }
}

export default ModernChair;
