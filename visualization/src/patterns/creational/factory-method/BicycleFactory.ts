import Bicycle from './Bicycle';
import Vehicle from './Vehicle';
import VehicleFactory from './VehicleFactory';

class BicycleFactory extends VehicleFactory {
  createVehicle(speed: number): Vehicle {
    return new Bicycle(speed, this.location);
  }
}

export default BicycleFactory;
