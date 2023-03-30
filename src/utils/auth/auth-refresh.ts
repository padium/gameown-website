import {isNotNull} from "@d-lab/common-kit"
import UserSession from "../storage/user-session"
import ssoClient from "../../clients/sso.client"
import {TokenResponse} from "@padium/sso"

export default async function handleAuth<T>(call: () => Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
        call().then((data: T) => {
            resolve(data)
        }).catch((error) => {
            if (error.code == "601" && isNotNull(UserSession.getSession()?.refreshToken)) {
                ssoClient.auth.refreshToken().then((_: TokenResponse) => {
                    call().then((data2: T) => {
                        resolve(data2)
                    }).catch((error2) => {
                      reject(error2)
                    })
                })
            }
            reject(error)
        })
    })
}