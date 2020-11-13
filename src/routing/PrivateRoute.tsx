import React from 'react';
import { Route, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { getStarted } from '../store/start/Start.selectors';
import StartForm from '../components/StartForm/StartForm';

interface PrivateRouteProps extends RouteProps {
    component: React.ComponentType<any>;
    path?: string;
}

export default ({ component, ...options }: PrivateRouteProps) => {
    const isStarted = useSelector(getStarted);
    const finalComponent = isStarted ? component : StartForm;

    return <Route {...options} component={finalComponent} />
};