import React from "react"
import RoutePath from "./route.interface"
import Path from "./path.enum"
import AuthUtils from "../utils/auth/AuthUtils"

const InventoryPage = React.lazy(() => import("../app/inventory/page"))

const routes: RoutePath[] = [
    {
        name: 'Inventory',
        path: Path.INVENTORY,
        component: InventoryPage,
        restrictedBy: {validate: AuthUtils.requireSession, redirectOnFailure: Path.LOGIN}
    }
]

export default routes