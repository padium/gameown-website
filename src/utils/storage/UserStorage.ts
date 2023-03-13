
export default class SessionStorage {
    private static sessionKey(): string {
        return `auth-session-token`;
    }

    static getSessionToken(): string | null {
        return localStorage.getItem(this.sessionKey());
    }

    static clearSession() {
        localStorage.removeItem(this.sessionKey());
    }

    static storeSession(token: string) {
        localStorage.setItem(this.sessionKey(), token);
    }

    static hasSession(): boolean {
        return localStorage.getItem(this.sessionKey()) != null;
    }
}
