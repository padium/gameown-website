import React from "react"
import RoutePath from "./route.interface"
import AuthUtils from "../utils/auth/AuthUtils"
import Path from "./path.enum"

const DashboardProfilePage = React.lazy(() => import("../app/dashboard/account/profile.page"))
const DashboardAccountPage = React.lazy(() => import("../app/dashboard/account/account.page"))
const DashboardWalletPage = React.lazy(() => import("../app/dashboard/wallet/balance.page"))
const DashboardWPaymentPage = React.lazy(() => import("../app/dashboard/wallet/payment.page"))
const DashboardPublisherPage = React.lazy(() => import("../app/dashboard/publisher/publisher.page"))
const DashboardPOperatorsPage = React.lazy(() => import("../app/dashboard/publisher/operators.page"))
const DashboardPGamesPage = React.lazy(() => import("../app/dashboard/publisher/game/my-games.page"))
const DashboardPNewGamePage = React.lazy(() => import("../app/dashboard/publisher/game/new-game.page"))

const routes: RoutePath[] = [
    {
        name: 'Profile',
        path: Path.DASHBOARD_PROFILE,
        component: DashboardProfilePage,
        restrictedBy: {validate: AuthUtils.requireSession, redirectOnFailure: Path.LOGIN}
    },
    {
        name: 'Account',
        path: Path.DASHBOARD_ACCOUNT,
        component: DashboardAccountPage,
        restrictedBy: {validate: AuthUtils.requireSession, redirectOnFailure: Path.LOGIN}
    },
    {
        name: 'Wallet',
        path: Path.DASHBOARD_WALLET,
        component: DashboardWalletPage,
        restrictedBy: {validate: AuthUtils.requireSession, redirectOnFailure: Path.LOGIN}
    },
    {
        name: 'Payment Methods',
        path: Path.DASHBOARD_W_PAYMENT,
        component: DashboardWPaymentPage,
        restrictedBy: {validate: AuthUtils.requireSession, redirectOnFailure: Path.LOGIN}
    },
    {
        name: 'Publisher',
        path: Path.DASHBOARD_PUBLISHER,
        component: DashboardPublisherPage,
        restrictedBy: {validate: AuthUtils.requireSession, redirectOnFailure: Path.LOGIN}
    },
    {
        name: 'Operators',
        path: Path.DASHBOARD_P_OPERATORS,
        component: DashboardPOperatorsPage,
        restrictedBy: {validate: AuthUtils.requireSession, redirectOnFailure: Path.LOGIN}
    },
    {
        name: 'Games',
        path: Path.DASHBOARD_P_GAMES,
        component: DashboardPGamesPage,
        restrictedBy: {validate: AuthUtils.requireSession, redirectOnFailure: Path.LOGIN}
    },
    {
        name: 'New Game',
        path: Path.DASHBOARD_P_GAME_NEW,
        component: DashboardPNewGamePage,
        restrictedBy: {validate: AuthUtils.requireSession, redirectOnFailure: Path.LOGIN}
    }
]

export default routes