import React from 'react';
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Start from '../components/start/Start';

const PrivateRoute = ({ component, ...options }) => {
    const started = useSelector((state) => state.start.started);
    const finalComponent = started ? component : Start;

    return <Route {...options} component={finalComponent} />
};

export default PrivateRoute;