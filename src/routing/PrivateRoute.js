import React from 'react';
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { getStarted } from '../store/start/Start.selectors';
import StartApp from '../components/start/StartApp';

const PrivateRoute = ({ component, ...options }) => {
    const isStarted = useSelector(getStarted);
    const finalComponent = isStarted ? component : StartApp;

    return <Route { ...options } component={ finalComponent } />
};

export default PrivateRoute;