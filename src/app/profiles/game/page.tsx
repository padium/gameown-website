import {useParams} from "react-router"
import Profile from "../page"
import {isEmpty} from "@d-lab/common-kit"
import Loading from "../../../components/dashboard/loading"
import GameProfile from "../../../components/games/game-profile"

function GameProfilePage() {
    const {identifier} = useParams()

    if (isEmpty(identifier)) {
        return <Loading/>
    }
    return <GameProfile identifier={identifier!}/>
}

const page =() => <Profile content={<GameProfilePage/>}/>
export default page