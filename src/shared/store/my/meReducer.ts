import {MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction, PostDataRequestSuccessAction} from "./action";
import {Reducer} from "react";
import {IUserData} from "../../hooks/useUserData";
import {IPostData} from "../../CardsList";


export type MeState = {
	loading: boolean;
	error: string;
	data: IUserData;
}

type MeActions = MeRequestAction |
	MeRequestSuccessAction |
	MeRequestErrorAction |
	PostDataRequestSuccessAction

export const meReducer: Reducer<MeState, MeActions> = (state, action) => {
	switch (action.type) {
		case "MY_REQUEST":
			return {
				...state,
				loading: true,
			}
		case "MY_REQUEST_ERROR":
			return {
				...state,
				error: action.error,
				loading: false
			}
		case "MY_REQUEST_SUCCESS":
			return {
				...state,
				data: action.data,
				loading: false,
			}
		default :
			return state

	}
}

export const meReducerPost: Reducer<MeState, MeActions> = (state, action) => {
	switch (action.type) {
		case "POST_DATA_REQUEST_SUCCESS":
			return {
				...state,
				postData: action.data,
			}
		default :
			return state

	}
}

