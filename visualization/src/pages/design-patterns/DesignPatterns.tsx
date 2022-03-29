import { Switch, Route, Redirect } from 'react-router-dom';

import Creational from './creational';

const DesignPatterns = () => (
  <Switch>
    <Route path="/design-patterns/creational" component={Creational} />
    <Redirect to="/" />
  </Switch>
);

export default DesignPatterns;
