import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {cardContext} from "../context/cardContext";
import {useSelector} from "react-redux";
import {RootState} from "../store/store";

export function useComment() {
	const [data, setData]: Array<any> = useState({});
	const objArrFromContext: any = useContext(cardContext)
	const postId = objArrFromContext.id;
	const token = useSelector<RootState, string>(state => state.token)

	useEffect(() => {
		axios.get(`https://oauth.reddit.com/comments/${postId}`, {
			headers: {Authorization: `bearer ${token}`}
		})
			.then((resp) => {
				const postData = resp.data;
				setData(postData[1].data.children)
			})
			.catch(console.log)
	}, [token])
	return data
}
