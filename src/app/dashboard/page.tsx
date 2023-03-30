import './page.module.css'
import {Container, Grid, Paper} from "@mui/material"
import HeadMenu from "../../components/dashboard/head-menu"
import NavMenu from "../../components/dashboard/nav-menu"
import {menu, menuAdmin, menuPublisher} from "./menu-items"
import {ReactNode, useEffect, useState} from "react"
import handleAuth from "../../utils/auth/auth-refresh"
import apiClient from "../../clients/padium.client"
import ssoClient from "../../clients/sso.client"
import {isAllowed, Role} from "@padium/sso"

export interface DashboardProps {
    content: ReactNode
}

export default function Dashboard(props: DashboardProps) {
    const [navItems, setNavItems] = useState(menu)

    useEffect(() => {
        handleAuth(() => apiClient.publisher.getOwn())
            .then(_ => {
                const tmp = [...menu]
                tmp[2] = menuPublisher
                setNavItems(tmp)
                handleAuth(() => ssoClient.role.me())
                    .then(response => {
                        if (isAllowed(response.role, Role.Moderator)) {
                            setNavItems([...tmp, menuAdmin])
                        }
                    })
            })
    }, [])

    return <div>
        <HeadMenu/>
        <Grid container>
            <Grid item xs={2}>
                <NavMenu categories={navItems}/>
            </Grid>
            <Grid item xs={10}>
                <Container component="main">
                    <Paper elevation={1} sx={{width: "100%", padding: "20px"}}>
                        {props.content}
                    </Paper>
                </Container>
            </Grid>
        </Grid>
    </div>
}
