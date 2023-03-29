import {isNotNull, isNull} from "@d-lab/common-kit"
import {Session} from "@padium/sso"

export default class UserSession {
    static jwtKey = 'padium-jwt'
    static refreshKey = 'padium-refresh'
    static userKey = 'padium-user'

    static getSession(): Session | null {
        const jwt = localStorage.getItem(this.jwtKey)
        const refresh = localStorage.getItem(this.refreshKey)
        const user = JSON.parse(localStorage.getItem(this.userKey) || "{}")

        if (isNull(jwt)) {
            return null
        }
        return {
            jwt: jwt,
            refreshToken: refresh,
            user: user
        }
    }

    static getCurrentUserId(): number | undefined {
        const user = JSON.parse(localStorage.getItem(this.userKey) || "{}")
        return user.id
    }

    static clearSession() {
        localStorage.removeItem(this.jwtKey)
        localStorage.removeItem(this.refreshKey)
        localStorage.removeItem(this.userKey)
    }

    static storeSession(session: Session) {
        if (isNull(session.jwt)) {
            this.clearSession()
        } else {
            localStorage.setItem(this.jwtKey, session.jwt!)
            localStorage.setItem(this.refreshKey, session.refreshToken!)
            localStorage.setItem(this.userKey, JSON.stringify(session.user!))
        }
    }

    static hasSession(): boolean {
        return isNotNull(localStorage.getItem(this.jwtKey))
    }
}
