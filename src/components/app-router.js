import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Timer from './timer';

/*
This page contains the routing for the application.
*/

const AppRouter = () => (
    <Switch>
        <Route exact path = '/' component = {Timer}/>
    </Switch>
);

export default AppRouter;
