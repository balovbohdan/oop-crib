import Sofa from '../Sofa';

class VictorianSofa implements Sofa {
  readonly complexity: number;
  readonly cost: number;

  constructor(complexity: number, cost: number) {
    this.complexity = complexity;
    this.cost = cost;
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

  serialize() {
    return {
      type: 'sofa',
      style: 'victorian',
      complexity: this.complexity,
      cost: this.cost,
    };
  }
}

export default VictorianSofa;
