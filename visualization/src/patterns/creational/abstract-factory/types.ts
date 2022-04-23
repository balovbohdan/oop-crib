export type DeliveryLocation = 'Ukraine' | 'United Kingdom' | 'Norway';

export type SerializedFurnitureProduct = {
  type: 'chair' | 'sofa',
  style: 'victorian' | 'modern',
  deliveryLocation: DeliveryLocation,
  complexity: number,
  cost: number,
};
