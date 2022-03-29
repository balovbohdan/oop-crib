import Vehicle from './Vehicle';
import TruckFactory from './TruckFactory';
import ShipFactory from './ShipFactory';
import BicycleFactory from './BicycleFactory';
import VehicleFactory from './VehicleFactory';

type Type = 'truck' | 'ship' | 'bicycle';
type Location = 'Ukraine' | 'United Kingdom' | 'Norway';

class VehicleFactorySystem {
  static readonly defaultType: Type = 'truck';
  static readonly defaultLocation: Location = 'Ukraine';

  readonly type: Type = VehicleFactorySystem.defaultType;
  readonly location: Location = VehicleFactorySystem.defaultLocation;
  readonly vehicleFactory: VehicleFactory = new TruckFactory(VehicleFactorySystem.defaultLocation);

  constructor(type: Type, location: Location) {
    this.type = type;
    this.location = location;
    this.vehicleFactory = VehicleFactorySystem.getVehicleFactory(type, location);
  }

  static getVehicleFactory(type: Type, location: string): VehicleFactory {
    switch (type) {
      case 'truck':
        return new TruckFactory(location);
      case 'ship':
        return new ShipFactory(location);
      case 'bicycle':
        return new BicycleFactory(location);
      default:
        return new TruckFactory(location);
    }
  }

  createVehicle(speed: number): Vehicle {
    return this.vehicleFactory.createVehicle(speed);
  }
}

export default VehicleFactorySystem;
