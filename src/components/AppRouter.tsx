import { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes, RoutesNames } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';

const AppRouter: FC = () => {
    const { isAuth } = useTypedSelector(state => state.auth);
    return (
        isAuth
            ?
            <Switch>
                {privateRoutes.map(({ path, exact, component }) => {
                    return <Route
                        path={path}
                        exact={exact}
                        component={component}
                        key={path}
                    />
                })}
                <Redirect to={RoutesNames.EVENT} />
            </Switch>
            :
            <Switch>
                {publicRoutes.map(({ path, exact, component }) => {
                    return <Route
                        path={path}
                        exact={exact}
                        component={component}
                        key={path}
                    />
                })}
                <Redirect to={RoutesNames.LOGIN} />
            </Switch>
    );
}

export default AppRouter;