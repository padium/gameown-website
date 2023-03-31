import {useNavigate} from "react-router"
import {Grid} from "@mui/material"
import Profile from "../page"

function PlayerProfilePage() {
    const navigate = useNavigate()
    return <Grid container>

    </Grid>
}

const page =() => <Profile content={<PlayerProfilePage/>}/>
export default page