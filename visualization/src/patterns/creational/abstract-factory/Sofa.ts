type SerializedSofa = {
  type: string,
  style: string,
  complexity: number,
  cost: number,
};

interface Sofa {
  readonly complexity: number;
  readonly cost: number;

  create(): Promise<void>;
  serialize(): SerializedSofa;
}

export default Sofa;
