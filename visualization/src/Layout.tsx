import { useHistory } from 'react-router-dom';
import { MainMenu, MainMenuButton, MainMenuDropdown, MainMenuIcon, FlexSpacer } from '@epam/promo';
import { ReactComponent as GitHubIcon } from '@epam/assets/icons/common/social-network-github-24.svg';

import logo from './icons/logo.svg';
import css from './Layout.module.scss';

type LayoutProps = {
  children: React.ReactNode,
};

const Header = () => {
  const history = useHistory();

  return (
    <MainMenu logoHref="/" appLogoUrl={logo}>
      <MainMenuDropdown caption="Creational">
        <MainMenuButton
          caption="Factory Method"
          link={{ pathname: '/design-patterns/creational/factory-method' }}
          collapseToMore />
        <MainMenuButton
          caption="Abstract Factory"
          link={{ pathname: '/design-patterns/creational/abstract-factory' }}
          collapseToMore />
        <MainMenuButton
          caption="Builder"
          link={{ pathname: '/design-patterns/creational/builder' }}
          collapseToMore />
        <MainMenuButton
          caption="Prototype"
          link={{ pathname: '/design-patterns/creational/prototype' }}
          collapseToMore />
        <MainMenuButton
          caption="Singleton"
          link={{ pathname: '/design-patterns/creational/singleton' }}
          collapseToMore />
      </MainMenuDropdown>
      <MainMenuDropdown caption="Structural">
        <MainMenuButton
          caption="Adapter"
          link={{ pathname: '/design-patterns/structural/adapter' }}
          collapseToMore />
        <MainMenuButton
          caption="Bridge"
          link={{ pathname: '/design-patterns/structural/bridge' }}
          collapseToMore />
        <MainMenuButton
          caption="Composite"
          link={{ pathname: '/design-patterns/structural/composite' }}
          collapseToMore />
        <MainMenuButton
          caption="Decorator"
          link={{ pathname: '/design-patterns/structural/decorator' }}
          collapseToMore />
        <MainMenuButton
          caption="Facade"
          link={{ pathname: '/design-patterns/structural/facade' }}
          collapseToMore />
        <MainMenuButton
          caption="Flyweight"
          link={{ pathname: '/design-patterns/structural/flyweight' }}
          collapseToMore />
        <MainMenuButton
          caption="Proxy"
          link={{ pathname: '/design-patterns/structural/proxy' }}
          collapseToMore />
      </MainMenuDropdown>
      <MainMenuDropdown caption="Behavioral">
        <MainMenuButton
          caption="Chain of Responsibility"
          link={{ pathname: '/design-patterns/behavioral/chain-of-responsibility' }}
          collapseToMore />
        <MainMenuButton
          caption="Command"
          link={{ pathname: '/design-patterns/behavioral/command' }}
          collapseToMore />
        <MainMenuButton
          caption="Iterator"
          link={{ pathname: '/design-patterns/behavioral/iterator' }}
          collapseToMore />
        <MainMenuButton
          caption="Mediator"
          link={{ pathname: '/design-patterns/behavioral/mediator' }}
          collapseToMore />
        <MainMenuButton
          caption="Memento"
          link={{ pathname: '/design-patterns/behavioral/memento' }}
          collapseToMore />
        <MainMenuButton
          caption="Observer"
          link={{ pathname: '/design-patterns/behavioral/observer' }}
          collapseToMore />
        <MainMenuButton
          caption="State"
          link={{ pathname: '/design-patterns/behavioral/state' }}
          collapseToMore />
        <MainMenuButton
          caption="Strategy"
          link={{ pathname: '/design-patterns/behavioral/strategy' }}
          collapseToMore />
        <MainMenuButton
          caption="Template Method"
          link={{ pathname: '/design-patterns/behavioral/template-method' }}
          collapseToMore />
        <MainMenuButton
          caption="Visitor"
          link={{ pathname: '/design-patterns/behavioral/visitor' }}
          collapseToMore />
      </MainMenuDropdown>
      <FlexSpacer />
      <MainMenuIcon icon={GitHubIcon} href="https://github.com/balovbohdan" />
    </MainMenu>
  );
};

const Layout = (props: LayoutProps) => (
  <div className={css.root}>
    <Header />
    <div className={css.feature}>
      {props.children}
    </div>
  </div>
);

export default Layout;
