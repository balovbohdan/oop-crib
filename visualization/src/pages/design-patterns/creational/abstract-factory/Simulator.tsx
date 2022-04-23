import { FlexRow, FlexCell, Text } from '@epam/promo';

import css from './AbstractFactory.module.css';
import * as constants from './constants';
import { FurnitureProduct } from '../../../../patterns/creational/abstract-factory';
import deliveryImage from './delivery.svg';

type Props = {
  furnitureProduct: FurnitureProduct,
};

const Simulator = (props: Props) => {
  const { type, style, deliveryLocation } = props.furnitureProduct.serialize();
  const furnitureProductImage = constants.FURNITURE_PRODUCT_IMAGES[style][type];
  const deliveryLocationFlag = constants.FLAG_IMAGES[deliveryLocation];

  return (
    <>
      <FlexRow cx={css.panelRow}>
        <Text fontSize="24" lineHeight="30" color="gray90">Your Furniture Product</Text>
      </FlexRow>
      <FlexRow cx={css.panelRow}>
        <FlexCell grow={1}>
          <img src={furnitureProductImage} className={css.furnitureProductImage} alt="Furniture Product" />
        </FlexCell>
        <FlexCell grow={1}>
          <img src={deliveryImage} className={css.deliveryImage} alt="Furniture Product Delivery" />
        </FlexCell>
        <FlexCell grow={1}>
          <img src={deliveryLocationFlag} className={css.flagImage} alt="Delivery Location Flag" />
        </FlexCell>
      </FlexRow>
    </>
  );
};

export default Simulator;
