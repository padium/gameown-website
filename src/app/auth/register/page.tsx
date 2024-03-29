import './page.module.css'
import {Container} from "@mui/material"
import React from "react"
import SignUp from "../../../components/auth/signup"
import HeadMenu from "../../../components/head-menu"
import Footer from "../../../components/footer"

export default function Register() {
    return <div>
        <HeadMenu/>
        <Container component="main">
            <SignUp/>
        </Container>
        <Footer/>
    </div>
}
