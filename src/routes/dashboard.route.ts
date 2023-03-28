import React from "react"
import RoutePath from "./route.interface"
import AuthUtils from "../utils/auth/AuthUtils"
import Path from "./path.enum"

const DashboardPage = React.lazy(() => import("../app/dashboard/page"))

const routes: RoutePath[] = [
    {
        name: 'Dashboard',
        path: Path.DASHBOARD,
        component: DashboardPage,
        restrictedBy: {validate: AuthUtils.requireSession, redirectOnFailure: Path.LOGIN}
    }
]

export default routes