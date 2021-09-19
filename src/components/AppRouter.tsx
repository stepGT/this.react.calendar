import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes, RoutesNames } from '../router';

const AppRouter: FC = () => {
    const auth = true;
    return (
        auth
            ?
            <Switch>
                {privateRoutes.map(route => {
                    return <Route
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                        key={route.path}
                    />
                })}
                <Redirect to={RoutesNames.EVENT} />
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route => {
                    return <Route
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                        key={route.path}
                    />
                })}
                <Redirect to={RoutesNames.LOGIN} />
            </Switch>
    );
}

export default AppRouter;