import React from "react";
import RoutePath from "./route.interface";

import routesAuth from "./auth.route";
import routesAccount from "./account.route";

const MainPage = React.lazy(() => import("../app/page"));
const Page404 = React.lazy(() => import("../app/errors/404"));

const routes: RoutePath[] = [
    {name: 'Default', path: '/', component: MainPage, restrictedBy: null},
    {name: 'Page 404', path: '/404', component: Page404, restrictedBy: null},
    ...routesAuth,
    ...routesAccount
];

export default routes;