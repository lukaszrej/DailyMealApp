import React from 'react';
import { Route, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { getStarted } from '../store/login/Login.selectors';
import Login from '../pages/login';

interface PrivateRouteProps extends RouteProps {
    component: React.ComponentType<any>;
    path?: string;
}

export default ({ component, ...options }: PrivateRouteProps) => {
    const isStarted = useSelector(getStarted);
    const finalComponent = isStarted ? component : Login;

    return <Route {...options} component={finalComponent} />
};
