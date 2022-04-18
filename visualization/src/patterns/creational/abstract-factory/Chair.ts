type SerializedChair = {
  type: string,
  style: string,
  complexity: number,
  cost: number,
};

interface Chair {
  readonly complexity: number;
  readonly cost: number;

  create(): Promise<void>;
  serialize(): SerializedChair;
}

export default Chair;
