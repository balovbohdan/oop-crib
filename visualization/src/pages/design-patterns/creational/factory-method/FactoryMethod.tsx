import { useState, useEffect, useCallback, useRef } from 'react';
import { Reveal } from 'react-reveal';
import { Text, Panel } from '@epam/promo';

import { Vehicle } from '../../../../patterns/creational/factory-method';
import Constructor from './Constructor';
import Simulator from './Simulator';
import Meta from './Meta';

const FactoryMethod = () => {
  const tryTimeoutIdRef = useRef<any>();
  const [vehicle, setVehicle] = useState<Vehicle|null>(null);

  const handleSettingsChange = useCallback((vehicle: Vehicle) => {
    setVehicle(vehicle);
  }, []);

  useEffect(() => () => {
    clearTimeout(tryTimeoutIdRef.current);
  }, []);

  return (
    <>
      <Text fontSize="24" lineHeight="30" color="gray90">Factory Method</Text>
      <Text fontSize="18" lineHeight="30" color="gray60">Create an appropriate vehicle for your business</Text>
      <Panel>
        <Constructor onChange={handleSettingsChange} />
        {
          vehicle && (
            <Reveal effect="fadeInUp">
              <Simulator vehicle={vehicle} />
            </Reveal>
          )
        }
        <Meta />
      </Panel>
    </>
  );
};

export default FactoryMethod;
