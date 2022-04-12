import React, { lazy } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from './routerHistory'

import GlobalStyle from './style/Global'
import PageLoader from './components/PageLoader'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import Header from 'components/Header'



const Home = lazy(() => import('./views/Home'))

const App: React.FC = () => {


  return (
    <Router history={history}>
      <GlobalStyle />
      <SuspenseWithChunkError fallback={<PageLoader />}>
        <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
      </SuspenseWithChunkError>

    </Router>
  );
}

export default App;
