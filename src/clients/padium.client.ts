import {Client, Session} from "@padium/core"
import UserSession from "../utils/storage/user-session"

// @ts-ignore
function getSession(): Session {
    return UserSession.getSession() || {jwt: null, refreshToken: null}
}

const apiClient = new Client(false, getSession)

export default apiClient