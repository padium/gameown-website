import React from "react"
import AuthUtils from "../utils/auth/AuthUtils"
import RoutePath from "./route.interface"
import Path from "./path.enum"

const LoginPage = React.lazy(() => import("../app/auth/login/page"))
const RegisterPage = React.lazy(() => import("../app/auth/register/page"))

const routes: RoutePath[] = [
    {
        name: 'Login',
        path: Path.LOGIN,
        component: LoginPage,
        restrictedBy: {validate: AuthUtils.requireNoSession, redirectOnFailure: Path.HOME}
    },
    {
        name: 'Signup',
        path: Path.REGISTER,
        component: RegisterPage,
        restrictedBy: {validate: AuthUtils.requireNoSession, redirectOnFailure: Path.HOME}
    }
]

export default routes