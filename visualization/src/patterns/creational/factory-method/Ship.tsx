import Vehicle from './Vehicle';

class Ship implements Vehicle {
  readonly type: string = 'ship';
  readonly speed: number = 0;
  readonly developedAt: string = '';

  constructor(speed: number, developedAt: string) {
    this.speed = speed;
    this.developedAt = developedAt;
  }

  go() {
    console.log(`Ship goes with speed ${this.speed}.`);
  }

  present() {
    alert(`Type: ship. Speed: ${this.speed}. Developed at: ${this.developedAt}.`);
  }

  serialize() {
    return {
      speed: this.speed,
      developedAt: this.developedAt,
    };
  }
}

export default Ship;
