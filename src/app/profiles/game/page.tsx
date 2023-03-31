import {useParams} from "react-router"
import Profile from "../page"
import {isEmpty} from "@d-lab/common-kit"
import Loading from "../../../components/dashboard/loading"
import GameProfile from "../../../components/games/game-profile"
import {Box} from "@mui/material"

function GameProfilePage() {
    const {identifier} = useParams()

    if (isEmpty(identifier)) {
        return <Loading/>
    }
    return <Box sx={{backgroundColor: "#FBFBFA"}}>
        <GameProfile identifier={identifier!}/>
        </Box>
}

const page =() => <Profile content={<GameProfilePage/>}/>
export default page