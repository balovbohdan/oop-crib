import { resolve } from 'dns';
import Chair from '../Chair';

class ModernChair implements Chair {
  readonly complexity: number;
  readonly cost: number;

  constructor(complexity: number, cost: number) {
    this.complexity = complexity;
    this.cost = cost;
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

  serialize() {
    return {
      type: 'chair',
      style: 'modern',
      complexity: this.complexity,
      cost: this.cost,
    };
  }
}

export default ModernChair;
