import {Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography} from "@mui/material"
import React, {useState} from "react"
import {Logo} from "../../resources"
import Path from "../../routes/path.enum"
import {EmailSendCodeRequest, RegisterRequest} from "@padium/sso"
import ssoClient from "../../clients/sso.client"
import {isEmpty} from "@d-lab/common-kit"
import {useNavigate} from "react-router"

export default function SignUp() {
    const navigate = useNavigate()
    const [step, setStep] = useState(0)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [verificationCode, setVerificationCode] = useState("")
    const [newsletterSubscription, setNewsletterSubscription] = useState(true)

    const submitSignupForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const request: EmailSendCodeRequest = {
            email: email
        }
        await ssoClient.auth.sendCodeForRegister(request)
        setStep(1)
    }

    const submitSignupRequest = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const request: RegisterRequest = {
            email: email,
            password: password,
            passwordConfirm: passwordConfirm,
            newsletterSubscription: newsletterSubscription,
            verificationCode: parseInt(verificationCode)
        }
        await ssoClient.auth.register(request)
        navigate(Path.DASHBOARD)
    }

    const signUpForm = <Box component="form" noValidate onSubmit={submitSignupForm} sx={{mt: 3}}>
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
            autoComplete="new-password"
            onChange={(e)=> setPassword(e.target.value)}
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
            name="confirm-password"
            label="Confirm your Password"
            type="password"
            id="confirm-password"
            autoComplete="confirm-password"
            onChange={(e)=> setPasswordConfirm(e.target.value)}
            inputProps={{
                style: {
                    padding: 14
                }
            }}
        />
        <FormControlLabel className="mt-2"
                          control={<Checkbox value="newsletter" checked={newsletterSubscription} color="primary" onChange={(e)=> setNewsletterSubscription(e.target.checked)}/>}
                          label="I want to receive new game release and updates via email."
        />
        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{mt: 3, mb: 2}}
            disabled={isEmpty(email) || isEmpty(password) || isEmpty(passwordConfirm) || password != passwordConfirm}
        >Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
            <Grid item>
                <Link href={Path.LOGIN} variant="body2">
                    Already have an account? Sign in
                </Link>
            </Grid>
        </Grid>
    </Box>

    const verifyForm = <Box component="form" noValidate onSubmit={submitSignupRequest} sx={{mt: 3}}>
        <TextField
            className="mt-5"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Verification code"
            name="code"
            type="number"
            autoComplete="code"
            onChange={(e)=> setVerificationCode(e.target.value)}
            autoFocus
            inputProps={{
                style: {
                    padding: 14
                }
            }}
        />
        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{mt: 3, mb: 2}}
            disabled={isEmpty(verificationCode)}
        >Confirm Email
        </Button>
    </Box>

    return (
        <Container maxWidth="xs">
            <CssBaseline/>
            <Box sx={{
                marginTop: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <img className="w-16 h-auto" src={Logo} alt="logo"/>
                <Typography component="h1" variant="h5">
                    Signup
                </Typography>
                {step === 0 ? signUpForm : verifyForm}
            </Box>
        </Container>
    )
}
