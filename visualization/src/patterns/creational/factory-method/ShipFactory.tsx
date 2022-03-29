import Ship from './Ship';
import Vehicle from './Vehicle';
import VehicleFactory from './VehicleFactory';

class ShipFactory extends VehicleFactory {
  createVehicle(speed: number): Vehicle {
    return new Ship(speed, this.location);
  }
}

export default ShipFactory;
