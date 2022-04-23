import { useState, useCallback } from 'react';
import { Reveal } from 'react-reveal';
import { Text, Panel } from '@epam/promo';

import Meta from './Meta';
import Simulator from './Simulator';
import Constructor from './Constructor';
import { FurnitureProduct } from '../../../../patterns/creational/abstract-factory';

const AbstractFactory = () => {
  const [furnitureProduct, setFurnitureProduct] = useState<FurnitureProduct | null>(null);

  const handleSettingsChange = useCallback((nextFurnitureProduct: FurnitureProduct) => {
    setFurnitureProduct(nextFurnitureProduct);
    console.log(nextFurnitureProduct);
  }, []);

  return (
    <>
      <Text fontSize="24" lineHeight="30" color="gray90">Abstract Factory</Text>
      <Text fontSize="18" lineHeight="30" color="gray60">
        Create an appropriate furniture for your home
      </Text>
      <Panel>
        <Constructor onChange={handleSettingsChange} />
        {
          furnitureProduct && (
            <Reveal effect="fadeInUp">
              <Simulator furnitureProduct={furnitureProduct} />
              <Meta furnitureProduct={furnitureProduct} />
            </Reveal>
          )
        }
      </Panel>
    </>
  );
};

export default AbstractFactory;
