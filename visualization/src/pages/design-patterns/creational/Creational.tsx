import { Switch, Route } from 'react-router-dom';

import FactoryMethod from './factory-method';
import AbstractFactory from './abstract-factory';

const Creational = () => (
  <Switch>
    <Route path="/design-patterns/creational/factory-method" component={FactoryMethod} />
    <Route path="/design-patterns/creational/abstract-factory" component={AbstractFactory} />
  </Switch>
);

export default Creational;
