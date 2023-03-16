import {isNotNull, isNull} from "@d-lab/common-kit"
import {Session} from "@padium/sso"

export default class UserSession {
    static jwtKey = 'padium-jwt'
    static refreshKey = 'padium-refresh'

    static getSession(): Session | null {
        const jwt = localStorage.getItem(this.jwtKey)
        const refresh = localStorage.getItem(this.refreshKey)

        if (isNull(jwt)) {
            return null
        }
        return {
            jwt: jwt,
            refreshToken: refresh
        }
    }

    static clearSession() {
        localStorage.removeItem(this.jwtKey)
        localStorage.removeItem(this.refreshKey)
    }

    static storeSession(session: Session) {
        if (isNotNull(session.jwt)) {
            localStorage.setItem(this.jwtKey, session.jwt!)
        }
        if (isNotNull(session.refreshToken)) {
            localStorage.setItem(this.refreshKey, session.refreshToken!)
        }
    }

    static hasSession(): boolean {
        return isNotNull(localStorage.getItem(this.jwtKey))
    }
}
