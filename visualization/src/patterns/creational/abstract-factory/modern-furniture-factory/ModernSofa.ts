import Sofa from '../Sofa';

class ModernSofa implements Sofa {
  readonly complexity: number;
  readonly cost: number;

  constructor(complexity: number, cost: number) {
    this.complexity = complexity;
    this.cost = cost;
  }

  create(): Promise<void> {
    const timeout = this.complexity * 2000;

    console.log(`Creating modern sofa... Complexity: ${this.complexity}. Cost: ${this.cost}$.`);

    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Your modern sofa is ready!');
        resolve();
      }, timeout);
    });
  }

  serialize() {
    return {
      type: 'sofa',
      style: 'modern',
      complexity: this.complexity,
      cost: this.cost,
    };
  }
}

export default ModernSofa;
