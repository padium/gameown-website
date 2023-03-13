import {Client, Session} from "@padium/sso"

// @ts-ignore
function getSession(): Session {
}

function setSession(jwt: string, refreshToken: string) {

}

const ssoClient = new Client(true, undefined, getSession, setSession)