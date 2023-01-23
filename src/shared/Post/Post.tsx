import React, {useContext, useEffect, useRef, useState} from 'react';
import styles from './post.css';
import ReactDOM from "react-dom";
import {cardContext} from "../context/cardContext";
import {useComment} from "../hooks/useComment"
import {CommentsGet} from "./CommentsGet";
import {generateRandomString} from "../utils/getRandomString";
import {useGetDateCreate} from "../hooks/useGetDateCreate";
import {CountUps} from "../UI/CountUps";
import {VideoBlock} from "../UI/VideoBlock";
import {ImgBlock} from "../UI/ImgBlock";
import {CommentPostContainer} from "./CommentPostContainer";
import {useHistory} from "react-router-dom";

interface IPost {
	title: string;
	position?: any;
	onClose?: (b: boolean) => void
	path?: string
}

export function Post(props: IPost) {
	const comments = useComment()
	const objArrFromContext: any = useContext(cardContext)
	const ref = useRef<HTMLDivElement>(null);
	const history = useHistory()
	const [loadState, setLoadState] = useState(false)

	function handleClick(event: MouseEvent) {
		if (event.target instanceof Node && !ref.current?.contains(event.target)) {
			history.push('/posts')
			props.onClose?.(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClick)
		if (window.location.pathname === props.path) {
			setLoadState(true)
		}
		return () => {
			document.removeEventListener('click', handleClick)
		}
	}, [])
	const node = document.querySelector('#modal_root')
	if (!node) return null
	const dateCreate = useGetDateCreate(objArrFromContext.created)
	const linkToVideo = objArrFromContext?.secure_media?.reddit_video ? objArrFromContext?.secure_media?.reddit_video.dash_url : '';
	const imgGet = objArrFromContext?.preview?.enabled ? objArrFromContext?.url : '';

	return ReactDOM.createPortal((
		<div>
			{
				loadState && <div className={styles.modal} style={{top: props.position.top}} ref={ref}>
					<div className={styles.topBlock}>
						<div className={styles.countPosition}>
							<CountUps countUps={objArrFromContext.ups}/>
						</div>
						<div>
							<h2 className={styles.titlePost}>{objArrFromContext.title}</h2>
							<span className={styles.datePublic}>опубликовано {dateCreate} назад</span>
							<img className={styles.authorIcon} alt='icon author'
								 src={objArrFromContext.sr_detail.icon_img}></img>
							<span className={styles.nameAuthor}>{objArrFromContext.author}</span>
						</div>
					</div>
					<p className={styles.contentBlock}>
						{objArrFromContext.selftext}
					</p>
					<ImgBlock props={imgGet}></ImgBlock>
					<VideoBlock props={linkToVideo}></VideoBlock>
					<a href={`https://www.reddit.com/${objArrFromContext.permalink}`} target='_blank'>ПЕРЕХОД</a>
					<CommentPostContainer key={objArrFromContext.id}/>
					<CommentsGet key={generateRandomString()} comment={comments}/>
				</div>
			}
		</div>

	), node);
}
