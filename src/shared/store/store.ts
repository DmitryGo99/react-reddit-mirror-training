import {Reducer} from "react";
import {ActionCreator} from "redux";
import {
	MeRequestAction,
	MeRequestErrorAction,
	MeRequestSuccessAction,
	PostDataRequestSuccessAction
} from "./my/action";
import {meReducer, meReducerPost, MeState} from "./my/meReducer";

export type RootState = {
	commentText?: any;
	token?: any;
	me: MeState;
	post: any ;
}

const initialState: RootState = {
	token: '',
	commentText: '',
	me: {
		loading: false,
		error: '',
		data: {}
	},
	post: ''
}

const UPDATE_COMMENT = 'UPDATE_COMMENT';
type UpdateCommentAction = {
	type: typeof UPDATE_COMMENT
	text: string;
}

const SET_TOKEN = 'SET_TOKEN';
type SetTokenAction = {
	type: typeof SET_TOKEN
	token: string;
}

type MyAction = UpdateCommentAction |
	SetTokenAction |
	MeRequestAction |
	MeRequestSuccessAction |
	MeRequestErrorAction |
	PostDataRequestSuccessAction


export const rootReducer: Reducer<any, MyAction> = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_COMMENT':
			return {
				...state,
				commentText: action.text
			}
		case "SET_TOKEN":
			return {
				...state,
				token: action.token
			}
		case 'MY_REQUEST':
		case 'MY_REQUEST_SUCCESS':
		case 'MY_REQUEST_ERROR':
			return {
				...state,
				me: meReducer(state.me, action)
			}
		case 'POST_DATA_REQUEST_SUCCESS':
			return {
				...state,
				post: meReducerPost(state.post, action)
			}
		default:
			return state
	}
}

export const updateComment: ActionCreator<UpdateCommentAction> = (text) => (
	{
		type: 'UPDATE_COMMENT',
		text,
	}
)

export const setToken: ActionCreator<SetTokenAction> = (token) => (
	{
		type: 'SET_TOKEN',
		token,
	}
)

