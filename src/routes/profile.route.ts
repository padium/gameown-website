import React from "react"
import RoutePath from "./route.interface"
import Path from "./path.enum"

const ProfilePublisherPage = React.lazy(() => import("../app/profiles/publisher/page"))
const ProfileGamePage = React.lazy(() => import("../app/profiles/game/page"))
const ProfilePlayerPage = React.lazy(() => import("../app/profiles/player/page"))

const routes: RoutePath[] = [
    {
        name: 'Publisher',
        path: Path.PUBLIC_PUBLISHER,
        component: ProfilePublisherPage,
        restrictedBy: null
    },
    {
        name: 'Game',
        path: Path.PUBLIC_GAME,
        component: ProfileGamePage,
        restrictedBy: null
    },
    {
        name: 'Player',
        path: Path.PUBLIC_PLAYER,
        component: ProfilePlayerPage,
        restrictedBy: null
    }
]

export default routes