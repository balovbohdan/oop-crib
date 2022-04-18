import { useState, useCallback } from 'react';
import { Text, Panel } from '@epam/promo';
import { Reveal } from 'react-reveal';

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
      <Text fontSize="18" lineHeight="30" color="gray60">Create an appropriate furniture for your home</Text>
      <Panel>
        <Constructor onChange={handleSettingsChange} />
        {/* {
          vehicle && (
            <Reveal effect="fadeInUp">
              <Simulator vehicle={vehicle} />
              <Meta vehicle={vehicle} />
            </Reveal>
          )
        } */}
      </Panel>
    </>
  );
};

export default AbstractFactory;
