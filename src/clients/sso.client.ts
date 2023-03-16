import {Client, Session} from "@padium/sso"
import UserSession from "../utils/storage/user-session"

// @ts-ignore
function getSession(): Session {
    return UserSession.getSession() || {jwt: null, refreshToken: null}
}

function setSession(jwt: string, refreshToken: string) {
    UserSession.storeSession({jwt, refreshToken})
}

const ssoClient = new Client(false, undefined, getSession, setSession)

export default ssoClient