import { useMemo, useState, useEffect } from 'react';
import { FlexRow, FlexCell, LabeledInput, RadioGroup } from '@epam/promo';

import css from './AbstractFactory.module.css';
import * as constants from './constants';
import { FurnitureProduct, FurnitureFactorySystem } from '../../../../patterns/creational/abstract-factory';

type Props = {
  onChange: (furnitureProduct: FurnitureProduct) => void,
};

const Constructor = (props: Props) => {
  const { onChange } = props;

  const [furnitureType, setFurnitureType] = useState<string>(constants.FURNITURE_TYPES.CHAIR);
  const [furnitureStyle, setFurnitureStyle] = useState<string>(constants.FURNITURE_STYLES.MODERN);
  const [furnitureMeterial, setFurnitureMaterial] = useState<string>(constants.FURNITURE_MATERIALS.CHEAP);
  const [deliveryLocation, setDeliveryLocation] = useState<string>(constants.DELIVERY_LOCATIONS.UKRAINE);

  const furnitureTypeItems = useMemo(() => (
    Object.values(constants.FURNITURE_TYPES).map((item) => ({ id: item, name: item }))
  ), []);

  const furnitureStyleItems = useMemo(() => (
    Object.values(constants.FURNITURE_STYLES).map((item) => ({ id: item, name: item }))
  ), []);

  const furnitureMeterialItems = useMemo(() => (
    Object.values(constants.FURNITURE_MATERIALS).map((item) => ({ id: item, name: item }))
  ), []);

  const deliveryLocationItems = useMemo(() => (
    Object.values(constants.DELIVERY_LOCATIONS).map((item) => ({ id: item, name: item }))
  ), []);

  const furnitureProduct = useMemo(() => {
    const furnitureFactorySystem = new FurnitureFactorySystem(furnitureStyle);
    const complexity = constants.FURNITURE_TYPES_TO_COMPLEXITIES[furnitureType];
    const baseCost = constants.BASE_COSTS[furnitureStyle];
    const costWithMaterials = constants.FURNITURE_MATERIALS_TO_COST_COEFFICIENTS[furnitureMeterial] * baseCost;
    const costWithDelivery = constants.DELIVERY_LOCATIONS_TO_COST_COEFFICIENTS[deliveryLocation] * costWithMaterials;

    switch (furnitureType) {
      case constants.FURNITURE_TYPES.CHAIR:
        return furnitureFactorySystem.createChair(complexity, costWithDelivery);
      case constants.FURNITURE_TYPES.SOFA:
        return furnitureFactorySystem.createSofa(complexity, costWithDelivery);
      default:
        return furnitureFactorySystem.createChair(complexity, costWithDelivery);
    }
  }, [furnitureType, furnitureStyle, furnitureMeterial, deliveryLocation]);

  useEffect(() => {
    onChange(furnitureProduct);
  }, [furnitureProduct, onChange]);

  return (
    <>
      <FlexRow alignItems="top" cx={css.panelRow}>
      <FlexCell grow={1}>
          <LabeledInput label="Furniture Type">
            <RadioGroup
              items={furnitureTypeItems}
              value={furnitureType}
              onValueChange={setFurnitureType} />
          </LabeledInput>
        </FlexCell>
        <FlexCell grow={1}>
          <LabeledInput label="Furniture Style">
            <RadioGroup
              items={furnitureStyleItems}
              value={furnitureStyle}
              onValueChange={setFurnitureStyle} />
          </LabeledInput>
        </FlexCell>
        <FlexCell grow={1}>
          <LabeledInput label="Furniture Material">
            <RadioGroup
              items={furnitureMeterialItems}
              value={furnitureMeterial}
              onValueChange={setFurnitureMaterial} />
          </LabeledInput>
        </FlexCell>
        <FlexCell grow={1}>
          <LabeledInput label="Delivery Location">
            <RadioGroup
              items={deliveryLocationItems}
              value={deliveryLocation}
              onValueChange={setDeliveryLocation} />
          </LabeledInput>
        </FlexCell>
      </FlexRow>
    </>
  );
};

export default Constructor;
