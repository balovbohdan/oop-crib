import Truck from './Truck';
import Vehicle from './Vehicle';
import VehicleFactory from './VehicleFactory';

class TruckFactory extends VehicleFactory {
  createVehicle(speed: number): Vehicle {
    return new Truck(speed, this.location);
  }
}

export default TruckFactory;
