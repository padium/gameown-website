import SessionStorage from "../storage/UserStorage";

export default class AuthUtils {

    static requireSession(): boolean {
        return SessionStorage.hasSession()
    }

    static requireNoSession(): boolean {
        return !SessionStorage.hasSession()
    }
}