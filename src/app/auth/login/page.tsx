import './page.module.css'
import {Container} from "@mui/material"
import SignIn from "../../../components/auth/signin"
import Footer from "../../../components/footer"
import HeadMenu from "../../../components/head-menu"

export default function Login() {
    return <div>
        <HeadMenu/>
        <Container component="main">
            <SignIn/>
        </Container>
        <Footer/>
    </div>
}
