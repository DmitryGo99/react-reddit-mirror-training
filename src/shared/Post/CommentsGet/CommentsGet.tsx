import React from 'react';
import {CommentsList} from "./CommentsList";

interface ICommentsGet {
	comment?: any
}

export function CommentsGet(props: ICommentsGet) {
	if (Array.isArray(props.comment)) {
		return (
			<ul>
				{
					props.comment.map(value =>
						<CommentsList key={value.data.id} data={value.data}/>)
				}
			</ul>
		)
	} else {
		return (
			<p>загружаем</p>
		)
	}

}
