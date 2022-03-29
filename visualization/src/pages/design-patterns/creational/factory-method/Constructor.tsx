import { useState, useEffect, useMemo, useRef } from 'react';
import { FlexCell, FlexRow, RadioGroup, LabeledInput, NumericInput } from '@epam/promo';

import css from './FactoryMethod.module.css';
import { BUSINESS_TYPES, BUSINESS_TYPES_TO_VEHICLES, FACTORY_LOCATIONS } from './constants';
import { Vehicle, VehicleFactorySystem } from '../../../../patterns/creational/factory-method';

type Props = {
  onChange: (vehicle: Vehicle) => void,
};

type VehicleType = 'ship' | 'truck' | 'bicycle';
type FactoryLocation = 'Ukraine' | 'United Kingdom' | 'Norway';

const Constructor = (props: Props) => {
  const { onChange } = props;

  const tryTimeoutIdRef = useRef<any>();
  const [vehicleSpeed, setVehicleSpeed] = useState(0);
  const [businessType, setBusinessType] = useState(BUSINESS_TYPES.PIZZA_DELIVERY);
  const [vehicleTypes, setVehicleTypes] = useState(BUSINESS_TYPES_TO_VEHICLES[businessType]);
  const [vehicleType, setVehicleType] = useState(vehicleTypes[0]);
  const [factoryLocation, setFactoryLocation] = useState(FACTORY_LOCATIONS.UKRAINE);

  const vehicle = useMemo(() => {
    const vehicleFactorySystem = new VehicleFactorySystem(vehicleType as VehicleType, factoryLocation as FactoryLocation);

    return vehicleFactorySystem.createVehicle(vehicleSpeed)
  }, [vehicleType, vehicleSpeed, factoryLocation]);

  const businessTypeItems = useMemo(() => (
    Object.values(BUSINESS_TYPES).map((item) => ({ id: item, name: item }))
  ), []);

  const vehicleTypeItems = useMemo(() => (
    vehicleTypes.map((item) => ({ id: item, name: item }))
  ), [vehicleTypes]);

  const factoryLocationItems = useMemo(() => [
    { id: 'Ukraine', name: 'Ukraine' },
    { id: 'United Kingdom', name: 'United Kingdom' },
    { id: 'Norway', name: 'Norway' },
  ], []);

  useEffect(() => {
    setVehicleTypes(BUSINESS_TYPES_TO_VEHICLES[businessType]);
  }, [businessType]);

  useEffect(() => {
    setVehicleType(vehicleTypes[0]);
  }, [vehicleTypes]);

  useEffect(() => {
    onChange(vehicle);
  }, [vehicle, onChange]);

  useEffect(() => () => {
    clearTimeout(tryTimeoutIdRef.current);
  }, []);

  return (
    <>
      <FlexRow alignItems="top" cx={css.panelRow}>
        <FlexCell grow={1}>
          <LabeledInput label="Business Type">
            <RadioGroup
              items={businessTypeItems}
              value={businessType}
              onValueChange={setBusinessType} />
          </LabeledInput>
        </FlexCell>
        <FlexCell grow={1}>
          <LabeledInput label="Vehicle Type">
            <RadioGroup
              items={vehicleTypeItems}
              value={vehicleType}
              onValueChange={setVehicleType} />
          </LabeledInput>
        </FlexCell>
        <FlexCell grow={1}>
          <LabeledInput label="Factory Location">
            <RadioGroup
              items={factoryLocationItems}
              value={factoryLocation}
              onValueChange={setFactoryLocation} />
          </LabeledInput>
        </FlexCell>
        <FlexCell grow={0.8}>
          <LabeledInput label="Vehicle Speed (km per hour)">
            <NumericInput
              value={vehicleSpeed}
              onValueChange={setVehicleSpeed as (speed: number) => void}
              min={0}
              max={100} />
          </LabeledInput>
        </FlexCell>
      </FlexRow>
    </>
  );
};

export default Constructor;
