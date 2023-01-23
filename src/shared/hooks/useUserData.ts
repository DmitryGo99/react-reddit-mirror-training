import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {meRequestAsync} from "../store/my/action";

export interface IUserData {
	name?: string;
	iconImg?: string;
}

export function useUserData() {
	const token = useSelector<RootState, string>(state => state.token)
	const data = useSelector<RootState, IUserData>(state => state.me.data)
	const loader = useSelector<RootState, boolean>(state => state.me.loading)
	const dispatch: any = useDispatch()
	useEffect(() => {
		if (token && token !== '' && token !== 'undefined') {
			dispatch(meRequestAsync())
		}
	}, [token])
	const dataPlus = {
		...data,
		loader
	}
	return [dataPlus]
}

