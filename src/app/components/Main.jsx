import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { ConnectedDashboard } from './Dashboard';
import { ConnectedNavigation } from './Navigation';
import { ConnectedTaskDetail } from './TaskDetail';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import {history } from '../store/history';

export const Main = () => (
    <Router history={history}>
        <Provider store={store}>
             <div>
                <ConnectedNavigation />
                <Switch>
                    <Route exact path="/dashboard" component={ConnectedDashboard}/>
                    <Redirect exact from = '/' to = "/dashboard" />
                    <Route exact path="/task/:id" render={({match}) => (<ConnectedTaskDetail match={match}/>)} />
                </Switch>
            </div>
        </Provider>
    </Router>
)