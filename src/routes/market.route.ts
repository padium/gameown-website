import React from "react"
import RoutePath from "./route.interface"
import Path from "./path.enum"
import AuthUtils from "../utils/auth/AuthUtils"

const StorePage = React.lazy(() => import("../app/marketplace/store/page"))
const MarketPage = React.lazy(() => import("../app/marketplace/market/page"))

const routes: RoutePath[] = [
    {
        name: 'Store',
        path: Path.STORE,
        component: StorePage,
        restrictedBy: null
    },
    {
        name: 'Market',
        path: Path.MARKETPLACE,
        component: MarketPage,
        restrictedBy: null
    }
]

export default routes