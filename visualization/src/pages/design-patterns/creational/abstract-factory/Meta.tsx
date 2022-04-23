import { useState } from 'react';
import { FlexRow, TabButton, Button } from '@epam/promo';

import { TABS } from './constants';
import Code from '../../../../shared/components/code';
import { FurnitureProduct } from '../../../../patterns/creational/abstract-factory';
import css from './AbstractFactory.module.css';
import uml from './uml-abstract-factory.svg';

type MetaProps = {
  furnitureProduct: FurnitureProduct,
};

type TabProps = {
  activeTab: string,
  furnitureProduct: FurnitureProduct,
};

const Tab = (props: TabProps) => {
  switch (props.activeTab) {
    case TABS.UML: {
      return <img className={css.uml} src={uml} alt="factory method uml" />;
    }
    case TABS.PLAIN: {
      const furnitureProductSerialized = props.furnitureProduct.serialize();

      return <Code value={JSON.stringify(furnitureProductSerialized, undefined, 2)} />;
    }
    case TABS.CODE: {
      return (
        <Button
          caption="Open on GitHub"
          href="https://github.com/balovbohdan/oop-crib/tree/main/visualization/src/patterns/creational/abstract-factory"
          target="_blank" />
      );
    }
    default: {
      return null;
    }
  }
}

const Meta = (props: MetaProps) => {
  const [activeTab, setActiveTab] = useState<string>(TABS.PLAIN);

  return (
    <>
      <FlexRow borderBottom='gray40' cx={css.panelRow}>
        <TabButton
          caption="Plain Furniture Product"
          isLinkActive={activeTab === TABS.PLAIN}
          onClick={() => { setActiveTab(TABS.PLAIN); }}
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
        <Tab activeTab={activeTab} furnitureProduct={props.furnitureProduct} />
      </FlexRow>
    </>
  );
};

export default Meta;
