import Dashboard from "../../page"
import React, {useEffect, useState} from "react"
import {useNavigate} from "react-router"
import handleAuth from "../../../../utils/auth/auth-refresh"
import apiClient from "../../../../clients/padium.client"
import {Button, Grid, Stack, Typography} from "@mui/material"
import {DataGrid, GridColDef, GridValueGetterParams} from '@mui/x-data-grid'
import {GameListDto} from "@padium/core"
import {transformGameState} from "../../../../utils/pretify/game-state.pretify"
import Path from "../../../../routes/path.enum"
import PreviewIcon from '@mui/icons-material/Preview'
import {HttpError, isNotNull} from "@d-lab/common-kit"
import {FatError} from "../../../../components/errors/error"
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings"

function MyGamesPage() {
    const navigate = useNavigate()
    const [error, setError] = useState<HttpError | null>(null)
    const [loading, setLoading] = useState(true)
    const [games, setGames] = useState<GameListDto[]>([])
    const [paginationModel, setPaginationModel] = useState({
        pageSize: 20,
        page: 0,
    });

    useEffect(() => {
        handleAuth(() => apiClient.publisher.findGames({page: "0", pageSize: "100"}))
            .then(response => {
                setGames(response.games)
                setLoading(false)
            })
            .catch(error => {
                console.error(error)
                setError(error)
            })
    }, [])

    const columns: GridColDef[] = [
        {field: 'id', headerName: 'ID', width: 90},
        {field: 'identifier', headerName: 'Identifier', width: 150},
        {field: 'name', headerName: 'Name', width: 150},
        {field: 'verified', headerName: 'Verified', width: 90},
        {
            field: 'state', headerName: 'State', width: 150,
            valueGetter: (params: GridValueGetterParams) => transformGameState(params.row.state)
        },
        {
            field: 'action', headerName: '', align: "right", flex: 1,
            sortable: false, filterable: false, disableColumnMenu: true,
            renderCell: (params) => {
                return <Stack direction="row">
                    <Button
                        onClick={() => navigate(Path.DASHBOARD_P_GAME_EDIT.replace(":id", params.row.id.toString()))}><DisplaySettingsIcon/>edit</Button>
                    <Button
                        onClick={() => navigate(Path.PUBLIC_GAME.replace(":identifier", params.row.identifier.toString()))}><PreviewIcon/>view</Button>
                </Stack>
            }
        }
    ]
    if (isNotNull(error)) {
        return <FatError error={error!}/>
    }
    return <Grid container>
        <Grid container alignItems="center" sx={{marginBottom: "20px"}}>
            <Grid item>
                <Typography>Publisher Games: </Typography>
            </Grid>
            <Grid item flex={1}/>
            <Grid item>
                <Button variant="outlined" onClick={() => navigate(Path.DASHBOARD_P_GAME_NEW)}>Release new Game</Button>
            </Grid>
        </Grid>
        <Grid item xs={12}>
            <DataGrid
                rows={games}
                columns={columns}
                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}
                disableRowSelectionOnClick
                loading={loading}
                autoHeight
            />
        </Grid>
    </Grid>
}

const page = () => <Dashboard content={<MyGamesPage/>}/>
export default page