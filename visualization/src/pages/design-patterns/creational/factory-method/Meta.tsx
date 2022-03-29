import { useState } from 'react';
import { FlexRow, TabButton } from '@epam/promo';

import { TABS } from './constants';
import css from './FactoryMethod.module.css';

type TabProps = {
  activeTab: string,
};

const Tab = (props: TabProps) => {
  switch (props.activeTab) {
    case TABS.UML: {
      return <span>UML</span>;
    }
    case TABS.PLAIN_VEHICLE: {
      return <span>Plain Vehicle (JSON)</span>;
    }
    default: {
      return null;
    }
  }
}

const Meta = () => {
  const [activeTab, setActiveTab] = useState<string>('UML');

  return (
    <>
      <FlexRow borderBottom='gray40' cx={css.panelRow}>
        <TabButton
          caption="UML"
          isLinkActive={activeTab === TABS.UML}
          onClick={() => { setActiveTab(TABS.UML); }}
          size="36" />
        <TabButton
          caption="Plain Vehicle"
          isLinkActive={activeTab === TABS.PLAIN_VEHICLE}
          onClick={() => { setActiveTab(TABS.PLAIN_VEHICLE); }}
          size="36" />
      </FlexRow>
      <FlexRow cx={css.panelRow}>
        <Tab activeTab={activeTab} />
      </FlexRow>
    </>
  );
};

export default Meta;
