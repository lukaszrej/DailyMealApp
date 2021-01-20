import { ComponentType } from 'react';
import { Route, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { getStartedApp } from '../store/login/Login.selectors';
import { Login } from '../pages/login';

interface Props extends RouteProps {
    component: ComponentType<any>;
    path?: string;
}

export const PrivateRoute = ({ component, ...options }: Props) => {
    const isStarted = useSelector(getStartedApp);
    const finalComponent = isStarted ? component : Login;

    return <Route {...options} component={finalComponent} />
};
