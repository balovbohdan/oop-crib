import { useState } from 'react';
import { FlexRow, TabButton, Button } from '@epam/promo';

import { TABS } from './constants';
import Code from '../../../../shared/components/code';
import { Vehicle } from '../../../../patterns/creational/factory-method';
import css from './FactoryMethod.module.css';
import uml from './uml-factory-method.svg';

type MetaProps = {
  vehicle: Vehicle,
};

type TabProps = {
  activeTab: string,
  vehicle: Vehicle,
};

const Tab = (props: TabProps) => {
  switch (props.activeTab) {
    case TABS.UML: {
      return <img className={css.uml} src={uml} alt="factory method uml" />;
    }
    case TABS.PLAIN_VEHICLE: {
      const vehicleSerialized = props.vehicle.serialize();

      return <Code value={JSON.stringify(vehicleSerialized, undefined, 2)} />;
    }
    case TABS.CODE: {
      return (
        <Button
          caption="Open on GitHub"
          href="https://github.com/balovbohdan/oop-crib/tree/main/visualization/src/patterns/creational/factory-method"
          target="_blank" />
      );
    }
    default: {
      return null;
    }
  }
}

const Meta = (props: MetaProps) => {
  const [activeTab, setActiveTab] = useState<string>(TABS.PLAIN_VEHICLE);

  return (
    <>
      <FlexRow borderBottom='gray40' cx={css.panelRow}>
        <TabButton
          caption="Plain Vehicle"
          isLinkActive={activeTab === TABS.PLAIN_VEHICLE}
          onClick={() => { setActiveTab(TABS.PLAIN_VEHICLE); }}
          size="36" />
        <TabButton
          caption="UML"
          isLinkActive={activeTab === TABS.UML}
          onClick={() => { setActiveTab(TABS.UML); }}
          size="36" />
        <TabButton
          caption="Code"
          isLinkActive={activeTab === TABS.CODE}
          onClick={() => { setActiveTab(TABS.CODE); }}
          size="36" />
      </FlexRow>
      <FlexRow cx={css.panelRow}>
        <Tab activeTab={activeTab} vehicle={props.vehicle} />
      </FlexRow>
    </>
  );
};

export default Meta;
