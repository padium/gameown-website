import {GameState} from "@padium/core"

export function transformGameState(state: GameState): string {
    switch (state) {
        case GameState.BLOCKED:
            return "Blocked"
        case GameState.EDITOR:
            return "Editor"
        case GameState.PRE_APPROVAL:
            return "Pre-Approval"
        case GameState.APPROVED:
            return "Approved"
        case GameState.PRE_LISTING:
            return "Pre-Listing"
        case GameState.LISTED:
            return "Listed"
        case GameState.PRE_RELEASE:
            return "Pre-Release"
        case GameState.RELEASED:
            return "Released"
        default:
            return "Unknown"
    }
}