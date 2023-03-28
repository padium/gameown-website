import React from "react"
import RoutePath from "./route.interface"
import Path from "./path.enum"
import AuthUtils from "../utils/auth/AuthUtils"

const CommunityPage = React.lazy(() => import("../app/community/page"))

const routes: RoutePath[] = [
    {
        name: 'Community',
        path: Path.COMMUNITY,
        component: CommunityPage,
        restrictedBy: {validate: AuthUtils.requireSession, redirectOnFailure: Path.LOGIN}
    }
]

export default routes