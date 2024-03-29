import Dashboard from "../page"
import React, {useEffect, useState} from "react"
import handleAuth from "../../../utils/auth/auth-refresh"
import apiClient from "../../../clients/padium.client"
import {isNull} from "@d-lab/common-kit"
import Path from "../../../routes/path.enum"
import Loading from "../../../components/dashboard/loading"
import {useNavigate} from "react-router"

function OperatorsPage() {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        handleAuth(() => apiClient.publisher.getOwn())
            .then(response => {
                if (isNull(response.publisher)) {
                    navigate(Path.DASHBOARD_PUBLISHER)
                } else {
                    setLoading(false)
                }
            })
            .catch(error => {
                console.error(error)
                navigate(Path.DASHBOARD_PUBLISHER)
            })
    }, [])

    if (loading) {
        return <Loading/>
    }

    return <div>Operators page</div>
}

const page =() => <Dashboard content={<OperatorsPage/>}/>
export default page