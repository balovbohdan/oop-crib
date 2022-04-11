type SerializedVehicle = {
  type: string,
  speed: number,
  developedAt: string,
};

interface Vehicle {
  readonly type: string;
  readonly speed: number;
  readonly developedAt: string;
  go(): void;
  present(): void;
  serialize(): SerializedVehicle;
}

export default Vehicle;
