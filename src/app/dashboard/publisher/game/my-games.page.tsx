import Dashboard from "../../page"
import React, {useEffect, useState} from "react"
import {useNavigate} from "react-router"
import handleAuth from "../../../../utils/auth/auth-refresh"
import apiClient from "../../../../clients/padium.client"
import {Grid} from "@mui/material"
import {DataGrid, GridColDef, GridValueGetterParams} from '@mui/x-data-grid'
import {GameListDto} from "@padium/core"
import {transformGameState} from "../../../../utils/pretify/game-state.pretify"

function MyGamesPage() {
    const navigate = useNavigate()
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
            })
    }, [])

    const columns: GridColDef[] = [
        {field: 'id', headerName: 'ID', width: 90},
        {field: 'name', headerName: 'Name', width: 150},
        {field: 'verified', headerName: 'Verified', width: 90},
        {
            field: 'state', headerName: 'State', width: 150,
            valueGetter: (params: GridValueGetterParams) => transformGameState(params.row.state)
        },
    ]
    return <Grid container>
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
}

const page = () => <Dashboard content={<MyGamesPage/>}/>
export default page