import React, {useState} from 'react';
import {generateRandomString} from "../../../utils/getRandomString";
import {useGetDateCreate} from "../../../hooks/useGetDateCreate";
import {CountUps} from "../../../UI/CountUps";
import {Icon} from "../../../Icon/Icon";
import {ResponseForm} from "../../ResponseForm";
import styled from 'styled-components'

interface ICommentsList {
	data: any
	children?: React.ReactNode
}

const SItemComment = styled.li`
	position: relative;
	padding: 2px 3px 2px 40px;
	margin-top: 30px;
	&:after {
		content: '';
		position: absolute;
		width: 3px;
		height: calc(100% - 63px) ;
		left: 8px;
		bottom: 0;
		background-color: #D9D9D9;
	}
`
const SCount = styled.div`
	position: absolute;
	min-width: 40px;
	top: 0;
	left: -10px;
`

const SImg = styled.img`
margin-right: 7px;
width: 20px;
height: 20px;
`
const SNameAuthor = styled.span`
margin-right: 7px;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #CC6633;
`
const SDateCreate = styled.span`
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #999999;
`
const STextBody = styled.p`
margin: 0;
margin-bottom: 14px;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #333333;
`
const SIconBtn = styled.div`
display: inline-block;
position: relative;
top: 3px;
margin-right: 5px;
& path {
	transition: all .3s ease-in-out;
}
`
const SBtnComment = styled.button`
position: relative;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #999999;
transition: all .3s ease-in-out;
&:not(:last-child) {
	margin-right: 27px;
}

&:hover {
	color: #CC6633;
}

&:active {
	color: #CC3361;
}
&:hover ${SIconBtn} path{
	fill: #CC6633;
}
`

const SInfoBlock = styled.div`
	
`

export function CommentsList(props: ICommentsList) {
	const dateCreateComment = useGetDateCreate(props.data.created)
	const countUps = props.data.ups
	const [isResponseFormOpened, setIsResponseFormOpened] = useState(false)
	if (props.data.body) {
		if (props.data.replies) {
			if (Array.isArray(props.data.replies.data.children)) {
				const newCommentArr: Array<any> = props.data.replies.data.children
				return (
					<SItemComment {...props}>
						<SCount {...props}>
							<CountUps countUps={countUps}/>
						</SCount>
						<div style={{marginBottom: '10px'}}>
							<SImg {...props} alt='img icon '
								 src='https://nakleikashop.ru/images/detailed/32/Angry-010.png'/>
							<SNameAuthor {...props}>{props.data.author}</SNameAuthor>
							<SDateCreate {...props}>{dateCreateComment} назад</SDateCreate>
						</div>
						<STextBody {...props}>{props.data.body}</STextBody>
						<div style={{marginBottom: '10px'}}>
							<SBtnComment onClick={() => {
								setIsResponseFormOpened(true)
							}} {...props}>
								<SIconBtn {...props}>
									<Icon name={"CommentIcon"} size={15}/>
								</SIconBtn>
								Ответить
							</SBtnComment>
							<SBtnComment {...props}>
								<SIconBtn {...props}>
									<Icon name={"ShareIcon"} size={15}/>
								</SIconBtn>
								Поделиться
							</SBtnComment>
							<SBtnComment {...props}>
								<SIconBtn {...props}>
									<Icon name={'ReportIcon'} size={15}/>
								</SIconBtn>
								Пожаловаться
							</SBtnComment>
						</div>
						{
							isResponseFormOpened && (
								<ResponseForm authorComment={props.data.author} onClose={setIsResponseFormOpened}/>
							)
						}
						<ul>
							{
								newCommentArr.map(value =>
									<CommentsList data={value.data} key={generateRandomString()}/>)
							}
						</ul>
					</SItemComment>
				);
			}
		} else {
			return (
				<SItemComment {...props}>
					<SCount {...props}>
						<CountUps countUps={countUps}/>
					</SCount>
					<div style={{marginBottom: '10px'}}>
						<SImg {...props} alt='img icon '
							 src='https://nakleikashop.ru/images/detailed/32/Angry-010.png'/>
						<SNameAuthor {...props}>{props.data.author}</SNameAuthor>
						<SDateCreate {...props}>{dateCreateComment} назад</SDateCreate>
					</div>
					<STextBody {...props}>{props.data.body}</STextBody>
					<div style={{marginBottom: '10px'}}>
						<SBtnComment onClick={() => {
							setIsResponseFormOpened(true)
						}} {...props}>
							<SIconBtn {...props}>
								<Icon name={"CommentIcon"} size={15}/>
							</SIconBtn>
							Ответить
						</SBtnComment>
						<SBtnComment {...props}>
							<SIconBtn {...props}>
								<Icon name={"ShareIcon"} size={15}/>
							</SIconBtn>
							Поделиться
						</SBtnComment>
						<SBtnComment {...props}>
							<SIconBtn {...props}>
								<Icon name={'ReportIcon'} size={15}/>
							</SIconBtn>
							Пожаловаться
						</SBtnComment>
					</div>
					{
						isResponseFormOpened && (
							<ResponseForm authorComment={props.data.author} onClose={setIsResponseFormOpened}/>
						)
					}
				</SItemComment>
			);
		}
	}
	return (
		<div style={{display: 'none'}}></div>
	)
}
