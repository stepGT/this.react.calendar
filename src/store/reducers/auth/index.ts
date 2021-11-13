import { AuthAction, AuthActionsEnum, AuthState } from "./types";

const initialState: AuthState = {
    isAuth: false
}
/**
 * 
 * @param state Current state
 * @param action 
 * @returns 
 */
export default function authReducer(state = initialState, action: AuthAction): AuthState {
    //
    switch (action.type) {
        case AuthActionsEnum.SET_AUTH:
            return { ...state, isAuth: action.payload }
        default:
            return state;
    }
}