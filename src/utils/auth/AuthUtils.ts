import UserSession from "../storage/user-session";

export default class AuthUtils {

    static requireSession(): boolean {
        console.log("authorized: ", UserSession.hasSession())
        return UserSession.hasSession()
    }

    static requireNoSession(): boolean {
        return !UserSession.hasSession()
    }
}