import React from "react";
import RoutePath from "./route.interface";
import AuthUtils from "../utils/auth/AuthUtils"
import Path from "./path.enum"

const AccountPage = React.lazy(() => import("../app/account/page"));

const routes: RoutePath[] = [
    {
        name: 'Account',
        path: Path.ACCOUNT,
        component: AccountPage,
        restrictedBy: {validate: AuthUtils.requireSession, redirectOnFailure: '/auth'}
    },
];

export default routes;