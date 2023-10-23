import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import routes from '../router/index';
import Home from "../pages/Home";

function AppRouter() {
    const routes = [
        {
            path: '/',
            component: Home,
            exact: true,
        },
        {
            path: '/about',
            component: Home,
            exact: true,
        }
    ]
    return (
        <Router>
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))}
            </Routes>
        </Router>
    );
}

export default AppRouter;
