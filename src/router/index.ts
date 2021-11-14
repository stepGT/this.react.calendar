import React from 'react';
import Login from '../pages/Login';
import Event from '../pages/Event';

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RoutesNames {
    LOGIN = 'https://stepgt.github.io/this_react_calendar/build/login',
    EVENT = 'https://stepgt.github.io/this_react_calendar/build/index.html'
}

export const publicRoutes: IRoute[] = [
    {
        path: RoutesNames.LOGIN,
        exact: true,
        component: Login
    }
];

export const privateRoutes: IRoute[] = [
    {
        path: RoutesNames.EVENT,
        exact: true,
        component: Event
    }
];