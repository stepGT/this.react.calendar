import { IUser } from "../../../models/IUser";
import { AuthActionsEnum, SetAuthAction, SetUserAction, SetIsLoadingAction, SetErrorAction } from './types';
import { AppDispatch } from '../../index';
import axios from "axios";

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({
        type: AuthActionsEnum.SET_USER,
        payload: user
    }),
    setAuth: (auth: boolean): SetAuthAction => ({
        type: AuthActionsEnum.SET_AUTH,
        payload: auth
    }),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({
        type: AuthActionsEnum.SET_IS_LOADING,
        payload
    }),
    setError: (payload: string): SetErrorAction => ({
        type: AuthActionsEnum.SET_ERROR,
        payload
    }),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            setTimeout(async () => {
                const response = await axios.get<IUser[]>('./users.json');
                const mockUser = response.data.find(user => user.uname === username && user.pass === password);
                if (mockUser) {
                    localStorage.setItem('auth', 'true');
                    localStorage.setItem('username', mockUser.uname);
                    dispatch(AuthActionCreators.setAuth(true));
                    dispatch(AuthActionCreators.setUser(mockUser));
                }
                else {
                    dispatch(AuthActionCreators.setError('Incorrect username or password!'));
                }
                dispatch(AuthActionCreators.setIsLoading(false));
            }, 1000)

        } catch (error) {
            AuthActionCreators.setError('Error login!');
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('auth');
        localStorage.removeItem('username');
        dispatch(AuthActionCreators.setAuth(false));
        dispatch(AuthActionCreators.setUser({} as IUser));
    }
}