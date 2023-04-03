import Dashboard from "../../page"
import React, {useEffect, useState} from "react"
import handleAuth from "../../../../utils/auth/auth-refresh"
import Path from "../../../../routes/path.enum"
import {useNavigate} from "react-router"
import ssoClient from "../../../../clients/sso.client"
import {isAllowed, Role} from "@padium/sso"
import {GameListDto, GameState} from "@padium/core"
import apiClient from "../../../../clients/padium.client"
import {DataGrid, GridColDef, GridValueGetterParams} from "@mui/x-data-grid"
import {transformGameState} from "../../../../utils/pretify/game-state.pretify"
import {Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Grid} from "@mui/material"
import PendingIcon from '@mui/icons-material/Pending'
import PreviewIcon from "@mui/icons-material/Preview"
import {HttpError, isNotNull} from "@d-lab/common-kit"
import {FatError} from "../../../../components/errors/error"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import AddTaskIcon from "@mui/icons-material/AddTask"
import ReviewGame from "./review-game"

const modalStyle = {
    position: 'absolute',
    display: 'block',
    overflow: 'scroll',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    borderRadius: "8px",
    boxShadow: 24
}

function AdminGamesPage() {
    const navigate = useNavigate()
    const [error, setError] = useState<HttpError | null>(null)
    const [reqLoading, setReqLoading] = useState<{ [key: number]: boolean }>({})
    const [loading, setLoading] = useState(true)
    const [reviewIndex, setReviewIndex] = useState<number | null>(null)
    const [games, setGames] = useState<GameListDto[]>([])
    const [paginationModel, setPaginationModel] = useState({
        pageSize: 20,
        page: 0,
    })

    useEffect(() => {
        handleAuth(() => ssoClient.role.me())
            .then(response => {
                if (!isAllowed(response.role, Role.Moderator)) {
                    navigate(Path.DASHBOARD_PROFILE)
                } else {
                    handleAuth(() => apiClient.publisher.findGames({page: "0", pageSize: "100"}))
                        .then(response => {
                            setGames(response.games)
                            setLoading(false)
                        })
                        .catch(error => {
                            console.error(error)
                            setError(error)
                        })
                }
            })
            .catch(error => {
                console.error(error)
                navigate(Path.DASHBOARD_PROFILE)
            })
    }, [])

    const openGameReview = (gameId: number) => {
        const index = games.findIndex(it => it.id === gameId)
        setReviewIndex(index)
    }
    const closeGameReview = () => {
        setReviewIndex(null)
    }

    const approveGame = (gameId: number) => {
        setReqLoading({...open, [gameId]: true})
        handleAuth(() => apiClient.game.approveApproval(gameId))
            .then(_ => {
                const index = games.findIndex(it => it.id == gameId)
                games[index].state = GameState.APPROVED
                setGames(games)
                setReqLoading({...open, [gameId]: false})
            })
            .catch(error => {
                console.error(error)
                setReqLoading({...open, [gameId]: false})
            })
    }

    const approveListing = (gameId: number) => {
        setReqLoading({...open, [gameId]: true})
        handleAuth(() => apiClient.game.approveListing(gameId))
            .then(_ => {
                const index = games.findIndex(it => it.id == gameId)
                games[index].state = GameState.LISTED
                setGames(games)
                setReqLoading({...open, [gameId]: false})
            })
            .catch(error => {
                console.error(error)
                setReqLoading({...open, [gameId]: false})
            })
    }

    const approveRelease = (gameId: number) => {
        setReqLoading({...open, [gameId]: true})
        handleAuth(() => apiClient.game.approveRelease(gameId))
            .then(_ => {
                const index = games.findIndex(it => it.id == gameId)
                games[index].state = GameState.RELEASED
                setGames(games)
                setReqLoading({...open, [gameId]: false})
            })
            .catch(error => {
                console.error(error)
                setReqLoading({...open, [gameId]: false})
            })
    }

    const approveStep = (index: number) => {
        const game = games[index]
        setReviewIndex(null)
        if (game.state === GameState.PRE_APPROVAL) {
            approveGame(game.id)
        } else if (game.state === GameState.PRE_LISTING) {
            approveListing(game.id)
        } else if (game.state === GameState.PRE_RELEASE) {
            approveRelease(game.id)
        }
    }

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
            field: 'approval', headerName: 'Approve', width: 75,
            align: "center", sortable: false, filterable: false, disableColumnMenu: true,
            renderCell: (params) => {
                let action

                if (params.row.state >= GameState.APPROVED) {
                    action = <CheckCircleOutlineIcon color="success"/>
                } else if (params.row.state == GameState.PRE_APPROVAL) {
                    action = <Button
                        onClick={() => openGameReview(params.row.id)}>
                        {reqLoading[params.row.id] ? <CircularProgress color="inherit"/> : <AddTaskIcon/>}
                    </Button>
                } else {
                    action = <PendingIcon color="action"/>
                }
                return action
            }
        },
        {
            field: 'listing', headerName: 'Listing', width: 75,
            align: "center", sortable: false, filterable: false, disableColumnMenu: true,
            renderCell: (params) => {
                let action

                if (params.row.state >= GameState.LISTED) {
                    action = <CheckCircleOutlineIcon color="success"/>
                } else if (params.row.state == GameState.PRE_LISTING) {
                    action = <Button
                        onClick={() => openGameReview(params.row.id)}>
                        {reqLoading[params.row.id] ? <CircularProgress color="inherit"/> : <AddTaskIcon/>}
                    </Button>
                } else {
                    action = <PendingIcon color="action"/>
                }
                return action
            }
        },
        {
            field: 'release', headerName: 'Release', width: 75,
            align: "center", sortable: false, filterable: false, disableColumnMenu: true,
            renderCell: (params) => {
                let action

                if (params.row.state >= GameState.RELEASED) {
                    action = <CheckCircleOutlineIcon color="success"/>
                } else if (params.row.state == GameState.PRE_RELEASE) {
                    action = <Button
                        onClick={() => openGameReview(params.row.id)}>
                        {reqLoading[params.row.id] ? <CircularProgress color="inherit"/> : <AddTaskIcon/>}
                    </Button>
                } else {
                    action = <PendingIcon color="action"/>
                }
                return action
            }
        },
        {
            field: 'action', headerName: '', align: "right", flex: 1,
            sortable: false, filterable: false, disableColumnMenu: true,
            renderCell: (params) => {
                return <Button onClick={() => navigate(Path.PUBLIC_GAME.replace(":identifier", params.row.identifier.toString()))}>
                    <PreviewIcon/> view
                </Button>
            }
        },
    ]

    if (isNotNull(error)) {
        return <FatError error={error!}/>
    }
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
        {isNotNull(reviewIndex) &&
            <Dialog
                open={isNotNull(reviewIndex)}
                onClose={closeGameReview}
                scroll={"paper"}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                fullWidth
                maxWidth="md"
            >
                <DialogTitle id="scroll-dialog-title">Verify information for {transformGameState(games[reviewIndex!].state + 1)}</DialogTitle>
                <DialogContent dividers={true}>
                    <ReviewGame gameId={games[reviewIndex!].id}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeGameReview}>Cancel</Button>
                    <Button variant="contained" onClick={() => approveStep(reviewIndex!)}>Approve</Button>
                </DialogActions>
            </Dialog>
        }
    </Grid>
}

const page = () => <Dashboard content={<AdminGamesPage/>}/>
export default page