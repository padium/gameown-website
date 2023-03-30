import {Box, Button, Checkbox, CircularProgress, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography} from "@mui/material"
import React, {useState} from "react"
import {SocialIcon} from "react-social-icons"
import {Ico, Logo} from "../../resources"
import {useNavigate} from "react-router"
import Path from "../../routes/path.enum"
import {LoginRequest} from "@padium/sso"
import ssoClient from "../../clients/sso.client"
import {isEmpty} from "@d-lab/common-kit"

export default function SignIn() {
    const navigate = useNavigate()
    const [submit, setSubmit] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(true)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const request: LoginRequest = {
            email: email,
            password: password,
            shortSession: remember
        }
        setSubmit(true)
        await ssoClient.auth.login(request)
        setSubmit(false)
        navigate(Path.HOME)
    };

    return (
        <Container className="mt-2" maxWidth="xs">
            <CssBaseline/>
            <Grid sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <img className="w-16 h-auto" src={Logo} alt="logo"/>
                <Typography component="h1" variant="h5" className="mb-1">
                    Login
                </Typography>
                <Grid container>
                    <Button className="w-full mt-2" variant="outlined">
                        <img className="w-[20px] h-auto mr-2" src={Ico.Google} alt="google"/> Sign in with Google</Button>
                    <Button className="w-full mt-2" variant="outlined">
                        <SocialIcon className="mr-2" network="discord" style={{height: 20, width: 20}}/> Sign in with Discord
                    </Button>
                </Grid>
                <Box component="form" className="mt-1" onSubmit={handleSubmit} noValidate>
                    <TextField
                        className="mt-5"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={(e)=> setEmail(e.target.value)}
                        autoFocus
                        inputProps={{
                            style: {
                                padding: 14
                            }
                        }}
                    />
                    <TextField
                        className="mt-1"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e)=> setPassword(e.target.value)}
                        inputProps={{
                            style: {
                                padding: 14
                            }
                        }}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" checked={remember} color="primary" onChange={(e)=> setRemember(e.target.checked)}/>}
                        label="Remember me"/>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={isEmpty(email) || isEmpty(password)}
                    >
                        Sign In
                        {submit && <CircularProgress color="inherit"/>}
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="/" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href={Path.REGISTER} variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Container>
    )
}