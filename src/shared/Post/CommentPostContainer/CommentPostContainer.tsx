import React, {ChangeEvent, FormEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState, updateComment} from "../../store/store";
import {CommentPost} from "../CommentPost";

export function CommentPostContainer() {
	const value = useSelector<RootState, string>(state => state.commentText)
	const dispatch = useDispatch();

	function changeValue(event: ChangeEvent<HTMLTextAreaElement>) {
		dispatch(updateComment(event.target.value))
	}

	function handleSubmit(event: FormEvent) {
		event.preventDefault();
		console.log(value)
		alert(value)
	}

	return (
		<CommentPost
			changeValue={changeValue}
			value={value}
			handleSubmit={handleSubmit}
		/>
	);
}
