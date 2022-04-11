import Vehicle from './Vehicle';

class Bicycle implements Vehicle {
  readonly type: string = 'bicycle';
  readonly speed: number = 0;
  readonly developedAt: string = '';

  constructor(speed: number, developedAt: string) {
    this.speed = speed;
    this.developedAt = developedAt;
  }

  go() {
    console.log(`Bicycle goes with speed ${this.speed}.`);
  }

  present() {
    alert(`Type: bicycle. Speed: ${this.speed}. Developed at: ${this.developedAt}.`);
  }

  serialize() {
    return {
      type: this.type,
      speed: this.speed,
      developedAt: this.developedAt,
    };
  }
}

export default Bicycle;
