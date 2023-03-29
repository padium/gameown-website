import {Client, Session, TokenUser} from "@padium/sso"
import UserSession from "../utils/storage/user-session"

// @ts-ignore
function getSession(): Session {
    return UserSession.getSession() || {jwt: null, refreshToken: null, user: null}
}

function setSession(jwt: string, refreshToken: string, user: TokenUser) {
    UserSession.storeSession({jwt, refreshToken, user})
}

const ssoClient = new Client(false, undefined, getSession, setSession)

export default ssoClient