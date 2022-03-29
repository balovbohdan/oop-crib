import { createBrowserHistory } from 'history';
import { ContextProvider } from '@epam/uui';
import { ErrorHandler } from '@epam/promo';
import { Snackbar, Modals } from '@epam/uui-components';
import { Switch, Route, Redirect, Router } from 'react-router-dom';

import services from './services';
import Layout from './Layout';
import Home from './pages/home';
import DesignPatterns from './pages/design-patterns';

const history = createBrowserHistory();

const Pages = () => (
  <Layout>
    <Route path="/" component={Home} exact />
    <Route path="/design-patterns" component={DesignPatterns} />
    <Redirect to="/" />
  </Layout>
);

const App = () => (
  <Router history={history}>
    <ContextProvider
      history={history}
      apiDefinition={() => null}
      loadAppContext={() => Promise.resolve({})}
      onInitCompleted={(context) => { Object.assign(services, context); }}>
      <ErrorHandler>
        <Switch>
          <Pages />
          <Snackbar />
          <Modals />
        </Switch>
      </ErrorHandler>
    </ContextProvider>
  </Router>
);

export default App;
