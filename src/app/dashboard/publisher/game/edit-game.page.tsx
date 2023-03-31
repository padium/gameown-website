import Dashboard from "../../page"
import apiClient from "../../../../clients/padium.client"
import React, {useEffect, useState} from "react"
import {useNavigate, useParams} from "react-router"
import Path from "../../../../routes/path.enum"
import {Grid, Step, StepLabel, Stepper, Typography} from "@mui/material"
import {GameDto, GameState, GameUpdateRequest} from "@padium/core"
import Loading from "../../../../components/dashboard/loading"
import EditGameApproval from "./edit-steps/edit-game-approval"
import EditGameListing from "./edit-steps/edit-game-listing"
import EditGameRelease from "./edit-steps/edit-game-release"
import handleAuth from "../../../../utils/auth/auth-refresh"

function EditGamePage() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [game, setGame] = useState<GameDto>()
    const [activeStep, setActiveStep] = React.useState(0)
    const [skipped, setSkipped] = React.useState(new Set<number>())

    useEffect(() => {
        apiClient.game.getById(parseInt(id!))
            .then(response => {
                setGame(response)
                setActiveStep(getGameState(response.state))
                setLoading(false)
            })
            .catch(error => {
                console.error(error)
                navigate(Path.DASHBOARD_P_GAMES)
            })
    }, [id])
    const getGameState = (state: GameState) => {
        switch (state) {
            case GameState.BLOCKED:
                return 0
            case GameState.EDITOR:
                return 0
            case GameState.PRE_APPROVAL:
                return 1
            case GameState.APPROVED:
                return 2
            case GameState.PRE_LISTING:
                return 3
            case GameState.LISTED:
                return 4
            case GameState.PRE_RELEASE:
                return 5
            case GameState.RELEASED:
                return 6
        }
    }

    const prepareRequest = (game: GameDto): GameUpdateRequest => {
        return {
            name: game.name,
            identifier: game.identifier,
            header: game.header,
            description: game.description,
            websiteUrl: game.websiteUrl,
            twitterUrl: game.twitterUrl,
            thumbnailUrl: game.thumbnailUrl,
            mainUrl: game.mainUrl,
            bannerUrl: game.bannerUrl,
            tags: game.tags,
            price: game.price,
            downloadUrl: game.downloadUrl,
            ingamePayment: game.ingamePayment,
            availableAt: game.availableAt?.toISOString() || null
        }
    }
    const submitApproval = async (game: GameDto) => {
        await handleAuth(() => apiClient.game.update(game.id, prepareRequest(game)))
        await handleAuth(() => apiClient.game.requestApproval(game.id))
        setActiveStep(3)
    }

    const submitListing = async (game: GameDto) => {
        await handleAuth(() => apiClient.game.update(game.id, prepareRequest(game)))
        await handleAuth(() => apiClient.game.requestListing(game.id))
        setActiveStep(3)
    }

    const submitRelease = async (game: GameDto) => {
        await handleAuth(() => apiClient.game.update(game.id, prepareRequest(game)))
        await handleAuth(() => apiClient.game.requestRelease(game.id))
        setActiveStep(3)
    }

    const isStepSkipped = (step: number) => {
        return skipped.has(step)
    }

    const handleNext = () => {
        let newSkipped = skipped
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values())
            newSkipped.delete(activeStep)
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1)
        setSkipped(newSkipped)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const handleSkip = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values())
            newSkipped.add(activeStep)
            return newSkipped
        })
    }

    if (loading) {
        return <Loading/>
    }

    const labels = ['Approval', 'Listing', 'Release']
    const steps = [
        <EditGameApproval game={game!} onSubmit={submitApproval}/>,
        <Typography>We are working on your request, please wait for your game approval.</Typography>,
        <EditGameListing game={game!} onSubmit={submitListing} onBack={handleBack}/>,
        <Typography>We are working on your request, please wait for your listing approval.</Typography>,
        <EditGameRelease game={game!} onSubmit={submitRelease} onBack={handleBack}/>,
        <Typography>We are working on your request, please wait for your release approval.</Typography>,
    ]
    return <Grid container>
        <Grid item xs={12} sx={{marginBottom: "20px"}}>
            <Stepper activeStep={activeStep / 2}>
                {labels.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: React.ReactNode;
                    } = {};
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
        </Grid>
        <Grid item xs={12}>
            {activeStep > steps.length ?
                <>
                    <Typography sx={{mt: 2, mb: 1}}>
                        All steps completed - your game is released
                    </Typography>
                </>
                : steps[activeStep]
            }
        </Grid>
    </Grid>
}

const page = () => <Dashboard content={<EditGamePage/>}/>
export default page