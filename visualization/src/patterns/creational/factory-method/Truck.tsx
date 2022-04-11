import Vehicle from './Vehicle';

class Truck implements Vehicle {
  readonly type: string = 'truck';
  readonly speed: number = 0;
  readonly developedAt: string = '';

  constructor(speed: number, developedAt: string) {
    this.speed = speed;
    this.developedAt = developedAt;
  }

  go() {
    console.log(`Truck goes with speed ${this.speed}.`);
  }

  present() {
    alert(`Type: truck. Speed: ${this.speed}. Developed at: ${this.developedAt}.`);
  }

  serialize() {
    return {
      type: this.type,
      speed: this.speed,
      developedAt: this.developedAt,
    };
  }
}

export default Truck;
