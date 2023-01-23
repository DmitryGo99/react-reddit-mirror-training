import {Action, ActionCreator} from "redux";
import {IUserData} from "../../hooks/useUserData";
import {ThunkAction} from "redux-thunk";
import {RootState, setToken} from "../store";
import axios from "axios";

const MY_REQUEST = 'MY_REQUEST';
export type MeRequestAction = {
	type: typeof MY_REQUEST
}
export const meRequest: ActionCreator<MeRequestAction> = () => ({
	type: MY_REQUEST
})

const MY_REQUEST_SUCCESS = 'MY_REQUEST_SUCCESS';
export type MeRequestSuccessAction = {
	type: typeof MY_REQUEST_SUCCESS,
	data: IUserData

}
export const meRequestSuccess: ActionCreator<MeRequestSuccessAction> = (data: IUserData) => ({
	type: MY_REQUEST_SUCCESS,
	data
})

const MY_REQUEST_ERROR = 'MY_REQUEST_ERROR';
export type MeRequestErrorAction = {
	type: typeof MY_REQUEST_ERROR,
	error: string
}
export const meRequestError: ActionCreator<MeRequestErrorAction> = (error: string) => ({
	type: MY_REQUEST_ERROR,
	error
})

const POST_DATA_REQUEST_SUCCESS = 'POST_DATA_REQUEST_SUCCESS';
export type PostDataRequestSuccessAction = {
	type: typeof POST_DATA_REQUEST_SUCCESS,
	data : any
}
export const postDataRequestSuccess: ActionCreator<PostDataRequestSuccessAction> = (data: any) => ({
	type: POST_DATA_REQUEST_SUCCESS,
	data
})


export const meRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
	dispatch(meRequest())
	axios.get('https://oauth.reddit.com/api/v1/me.json', {
		headers: {Authorization: `bearer ${getState().token}`}
	})
		.then((resp) => {
			const userData = resp.data;
			dispatch(meRequestSuccess({name: userData.name, iconImg: userData.snoovatar_img}))
		})
		.catch((error) => {
			dispatch(meRequestError(String(error)))
		})
}

export const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
	if (window.__token__) {
		const token = window.__token__
		dispatch(setToken(token))
	}
}

export const postDataAsync = (nextAfter?: string): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
	axios.get('https://oauth.reddit.com/best.json?sr_detail=true', {
		headers: {Authorization: `bearer`},
		params: {
			after: nextAfter,
		}
	})
		.then((resp) => {
			const postData = resp.data;
			dispatch(postDataRequestSuccess({arrPosts: postData.data.children, after: postData.data.after}))
		})
		.catch((error) => {
			console.log(error)
		})
}