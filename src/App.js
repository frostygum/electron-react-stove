import React from 'react';
import { Provider } from 'mobx-react';
import UserStore from './Store/UserStore';
import { Route, Switch, HashRouter } from 'react-router-dom';

import { Home } from './Pages/Index';

import './App.css';

function App() {
  return (
    <Provider userStore={new UserStore()}>
       <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;
