import Dashboard from "../../page"
import React, {useEffect, useState} from "react"
import handleAuth from "../../../../utils/auth/auth-refresh"
import Path from "../../../../routes/path.enum"
import Loading from "../../../../components/dashboard/loading"
import {useNavigate} from "react-router"
import ssoClient from "../../../../clients/sso.client"
import {isAllowed, Role} from "@padium/sso"

function AdminUsersPage() {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        handleAuth(() => ssoClient.role.me())
            .then(response => {
                if (!isAllowed(response.role, Role.Moderator)) {
                    navigate(Path.DASHBOARD_PROFILE)
                } else {
                    setLoading(false)
                }
            })
            .catch(error => {
                console.error(error)
                navigate(Path.DASHBOARD_PROFILE)
            })
    }, [])

    if (loading) {
        return <Loading/>
    }

    return <div>AdminUsers page</div>
}

const page =() => <Dashboard content={<AdminUsersPage/>}/>
export default page