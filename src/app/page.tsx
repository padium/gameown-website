import './page.module.css'
import React from "react"
import Footer from "../components/footer"
import HeadMenu from "../components/head-menu"
import {useNavigate} from "react-router"
import GameFeatured from "../components/games/game-featured"
import GameList from "../components/games/game-list"

export default function Home() {
    const navigate = useNavigate()
    return <div>
        <HeadMenu/>
        <main>
            <GameFeatured/>
            <GameList/>
        </main>
        <Footer/>
    </div>
}
