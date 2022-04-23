import { SerializedFurnitureProduct } from './types';

interface Sofa {
  readonly complexity: number;
  readonly cost: number;

  create(): Promise<void>;
  serialize(): SerializedFurnitureProduct;
}

export default Sofa;
