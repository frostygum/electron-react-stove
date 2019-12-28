import React from 'react';
import { Provider } from 'mobx-react';
import UserStore from './Store/UserStore';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { Home } from './Pages/Index';

import './App.css';

function App() {
  return (
    <Provider userStore={new UserStore()}>
       <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
