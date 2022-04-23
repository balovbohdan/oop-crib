import { SerializedFurnitureProduct } from './types';

interface Chair {
  readonly complexity: number;
  readonly cost: number;

  create(): Promise<void>;
  serialize(): SerializedFurnitureProduct;
}

export default Chair;
