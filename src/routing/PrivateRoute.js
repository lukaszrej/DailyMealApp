import React from 'react';
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { getStarted } from '../store/start/Start.selectors';
import Start from '../components/start/Start';

const PrivateRoute = ({ component, ...options }) => {
    const isStarted = useSelector(getStarted);
    const finalComponent = isStarted ? component : Start;

    return <Route { ...options } component={ finalComponent } />
};

export default PrivateRoute;