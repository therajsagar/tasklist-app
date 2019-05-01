import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { ConnectedLogin } from './Login';
import { ConnectedDashboard } from './Dashboard';
import { ConnectedNavigation } from './Navigation';
import { ConnectedTaskDetail } from './TaskDetail';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { history } from '../store/history';

const RouteGuard = Component => ({ match }) => {
  !store.getState().session.authenicated ? (
    <Redirect to='/' />
  ) : (
    <Component match={match} />
  );
};

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        <ConnectedNavigation />
        <Switch>
          <Route exact path='/' component={ConnectedLogin} />
          <Route
            exact
            path='/dashboard'
            render={RouteGuard(ConnectedDashboard)}
          />
          <Route
            exact
            path='/task/:id'
            render={RouteGuard(ConnectedTaskDetail)}
          />
        </Switch>
      </div>
    </Provider>
  </Router>
);
