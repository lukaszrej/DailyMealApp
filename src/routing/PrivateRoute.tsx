import React from 'react';
import { Route, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { getStarted } from '../store/start/Start.selectors';
import StartApp from '../components/start/StartApp';

interface PrivateRouteProps extends RouteProps {
    component: React.ComponentType<any>;
    path?: string;
}

export default ({ component, ...options }: PrivateRouteProps) => {
    const isStarted = useSelector(getStarted);
    const finalComponent = isStarted ? component : StartApp;

    return <Route {...options} component={finalComponent} />
};
