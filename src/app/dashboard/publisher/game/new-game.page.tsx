import Dashboard from "../../page"
import apiClient from "../../../../clients/padium.client"
import React, {useEffect, useState} from "react"
import {useNavigate} from "react-router"
import Path from "../../../../routes/path.enum"
import {Button, CircularProgress, Grid, TextField, Typography} from "@mui/material"
import {isEmpty, isNull} from "@d-lab/common-kit"
import Loading from "../../../../components/dashboard/loading"
import handleAuth from "../../../../utils/auth/auth-refresh"

function NewGamePage() {
    const [submit, setSubmit] = useState(false)
    const [loading, setLoading] = useState(true)
    const [name, setName] = useState("")
    const [identifier, setIdentifier] = useState("")
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
                navigate(Path.DASHBOARD_P_GAMES)
            })
    }, [])

    const isNotValid = (): boolean => {
        return isEmpty(name) || isEmpty(identifier)
    }
    const handleSubmit = async () => {
        setSubmit(true)
        handleAuth(() => apiClient.game.create({
            name,
            identifier,
            header: "",
            description: "",
            websiteUrl: null,
            twitterUrl: null,
            thumbnailUrl: "",
            mainUrl: "",
            bannerUrl: "",
            tags: "",
            price: null,
            downloadUrl: null,
            ingamePayment: false,
            availableAt: null
        })).then(game => {
            setSubmit(false)
            navigate(Path.DASHBOARD_P_GAME_EDIT.replace(":id", game.id.toString()))
        })
    }

    if (loading) {
        return <Loading/>
    }

    return <Grid container>
        <Typography>Create a new Game</Typography>
        <Grid item xs={12}>
            <Typography>Name</Typography>
            <TextField
                className="mt-5"
                margin="normal"
                required
                id="name"
                label="name"
                autoComplete="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
        </Grid>
        <Grid item xs={12}>
            <Typography>Identifier</Typography>
            <TextField
                className="mt-5"
                margin="normal"
                required
                label="identifier"
                autoComplete="identifier"
                onChange={(e) => {
                    if (/[a-z-]$/.test(e.target.value)) {
                        setIdentifier(e.target.value)
                    }
                }}
                value={identifier}
            />
        </Grid>
        <Grid item xs={12}>
            <Button
                variant="contained"
                onClick={handleSubmit}
                disabled={isNotValid() || submit}
            >
                Create
                {submit && <CircularProgress color="inherit"/>}
            </Button>
        </Grid>
    </Grid>
}

const page = () => <Dashboard content={<NewGamePage/>}/>
export default page