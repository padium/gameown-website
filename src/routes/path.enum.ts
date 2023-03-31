enum Path {
    HOME = "/",
    LOGIN = "/auth",
    REGISTER = "/auth/register",
    DASHBOARD_PROFILE = "/dashboard/profile",
    DASHBOARD_ACCOUNT = "/dashboard/account",
    DASHBOARD_WALLET = "/dashboard/wallet",
    DASHBOARD_W_PAYMENT = "/dashboard/wallet/payment",
    DASHBOARD_PUBLISHER = "/dashboard/publisher",
    DASHBOARD_P_OPERATORS = "/dashboard/publisher/operators",
    DASHBOARD_P_GAMES = "/dashboard/publisher/games",
    DASHBOARD_P_GAME_NEW = "/dashboard/publisher/game",
    DASHBOARD_P_GAME_EDIT = "/dashboard/publisher/game/:id",
    DASHBOARD_ADMIN_GAMES = "/dashboard/admin/games",
    DASHBOARD_ADMIN_USERS = "/dashboard/admin/users",
    PUBLIC_GAME = "/game/:identifier",
    PUBLIC_PUBLISHER = "/publisher/:identifier",
    PUBLIC_PLAYER = "/player/:identifier",
    STORE = "/store",
    COMMUNITY = "/community",
    INVENTORY = "/inventory",
    MARKETPLACE = "/marketplace"
}

export default Path