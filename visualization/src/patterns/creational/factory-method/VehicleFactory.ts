import Vehicle from './Vehicle';

abstract class VehicleFactory {
  readonly location: string = '';

  abstract createVehicle(speed: number): Vehicle;

  constructor(location: string) {
    this.location = location;
  }
}

export default VehicleFactory;
