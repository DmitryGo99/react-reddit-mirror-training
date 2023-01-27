import React, {useContext, useEffect, useRef, useState} from 'react';
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
import styled from 'styled-components'


interface IPost {
	title: string;
	position?: any;
	onClose?: (b: boolean) => void
	path?: string
	children?: React.ReactNode
}

const SModal = styled.div`
position: absolute;
left: 50%;
transform: translateX(-50%);
z-index: 1000;
overflow-x: hidden;
overflow-y: auto;
background: #FFFFFF;
box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.15);
border-radius: 7px;
min-width: 200px;
min-height: 160px;
max-width: 80%;
padding: 24px;
margin-bottom: 25px;
`
const STopBlock = styled.div`
display: flex;
margin-bottom: 24px;
`
const STitlePost = styled.h2`
	margin-bottom: 10px;
	font-weight: 400;
	font-size: 20px;
	line-height: 23px;
	color: #333333;
`
const SDatePublic = styled.span`
margin-right: 5px;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #999999;
`
const SAuthorIcon = styled.img`
width: 20px;
height: 20px;
`
const SNameAuthor = styled.span`
margin-right: 5px;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #CC6633;
`
const SContentBlock = styled.p`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #333333;
`


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
				loadState && <SModal {...props} style={{top: props.position.top + 200}} ref={ref}>
					<STopBlock {...props}>
						<div style={{marginRight: '24px'}}>
							<CountUps countUps={objArrFromContext.ups}/>
						</div>
						<div>
							<STitlePost {...props}>{objArrFromContext.title}</STitlePost>
							<SDatePublic {...props}>опубликовано {dateCreate} назад</SDatePublic>
							<SAuthorIcon {...props} alt='icon author'
								 src={objArrFromContext.sr_detail.icon_img}></SAuthorIcon>
							<SNameAuthor {...props}>{objArrFromContext.author}</SNameAuthor>
						</div>
					</STopBlock>
					<SContentBlock {...props}>
						{objArrFromContext.selftext}
					</SContentBlock>
					<ImgBlock props={imgGet}></ImgBlock>
					<VideoBlock props={linkToVideo}></VideoBlock>
					<a href={`https://www.reddit.com/${objArrFromContext.permalink}`} target='_blank'>ПЕРЕХОД</a>
					<CommentPostContainer key={objArrFromContext.id}/>
					<CommentsGet key={generateRandomString()} comment={comments}/>
				</SModal>
			}
		</div>

	), node);
}
