import {useNavigate} from "react-router"
import {Grid} from "@mui/material"
import Profile from "../page"

function PublisherProfilePage() {
    const navigate = useNavigate()
    return <Grid container>

    </Grid>
}

const page =() => <Profile content={<PublisherProfilePage/>}/>
export default page