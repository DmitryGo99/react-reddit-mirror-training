import React from 'react';
import styles from './userblock.css';
import {Icon} from "../../../Icon/Icon";
import styled from 'styled-components'

interface IUserBlockProps {
	avatarSrc?: string;
	username?: string;
	loader?: boolean
	children?: React.ReactNode
}

const UserBox = styled.a`
	cursor: pointer;
	display: flex;
	align-items: center;
	&:hover span{
		color: var(--orange);
	}
	&::hover > span{
		color: var(--orange);
	}
`
const AvatarBox = styled.div`
	width: 60px;
	height: 60px;
	padding: 5px;
	border-radius: 100%;
	box-shadow: none;
`
const AvatarImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 100%;	
`


export function UserBlock(props: IUserBlockProps) {

	return (
		<UserBox href="https://www.reddit.com/api/v1/authorize?client_id=gsPrKrOtfMuSQTh4N26WjQ&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
			{...props}>
			<AvatarBox {...props}>
				{
					props.avatarSrc ? <AvatarImg src={props.avatarSrc} alt={'user avatar'} {...props}/> :
						<Icon name={"AnonIcon"}/>
				}
			</AvatarBox>
			<UserBox {...props}>
				{
					props.loader ? 'загрузка...'
						: props.username ? <span className={styles.nameUser + ' ' + styles.nameActive}>{props.username}</span>
							: <span className={styles.nameUser + ' ' + styles.nameAnon}>Аноним</span>
				}
			</UserBox>
		</UserBox>
	);
}
