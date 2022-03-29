import { useState, useEffect, useCallback, useRef } from 'react';
import { Text, FlexRow, Button } from '@epam/promo';
import classNames from 'classnames';

import css from './FactoryMethod.module.css';
import { VEHICLES_TO_IMAGES } from './constants';
import { Vehicle } from '../../../../patterns/creational/factory-method';

type Props = {
  vehicle: Vehicle,
};

const Simulator = (props: Props) => {
  const tryTimeoutIdRef = useRef<any>();
  const [shouldTry, setShouldTry] = useState(false);
  const [vehicleImage, setVehicleImage] = useState<string>('');

  const vehicleImageClassList = classNames(css.vehicleImage, {
    [css.moveRight]: shouldTry,
  });

  const handleTryVehicle = useCallback(() => {
    setShouldTry(true);
    props.vehicle.go();

    tryTimeoutIdRef.current = setTimeout(() => {
      setShouldTry(false);
    }, 500);
  }, [props.vehicle]);

  useEffect(() => {
    if (props.vehicle) {
      setVehicleImage(VEHICLES_TO_IMAGES[props.vehicle.type]);
    } else {
      setVehicleImage('');
    }
  }, [props.vehicle]);

  useEffect(() => () => {
    clearTimeout(tryTimeoutIdRef.current);
  }, []);

  return (
    <>
      <FlexRow cx={css.panelRow}>
        <Text fontSize="24" lineHeight="30" color="gray90">Your Vehicle</Text>
      </FlexRow>
      <FlexRow cx={css.panelRow}>
        <img alt="vehicle" src={vehicleImage} className={vehicleImageClassList} />
      </FlexRow>
      <FlexRow cx={css.panelRow}>
        <Button color="green" caption="Try!" onClick={handleTryVehicle} />
        <Button color="blue" caption="Present" onClick={() => { props.vehicle.present(); }} />
      </FlexRow>
    </>
  );
};

export default Simulator;
