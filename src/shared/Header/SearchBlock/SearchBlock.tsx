import React, {useContext} from 'react';
import {UserBlock} from "./UserBlock";
import {userContext} from "../../context/userContext";
import styled from 'styled-components'

type Props = {
  children?: React.ReactNode
}

const UserBlockContainer = styled.div`
display: flex;
flex-flow: row nowrap;
justify-content: space-between;
align-items: center;
padding: 14px 20px;
background-color: var(--white);
border-radius: 0 0 7px 7px;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
margin: 0 0 38px;
@media ${props => props.theme.media.tablet} {
	padding: 0;
	margin: 0 0 0 auto;
	background-color: transparent;
	border-radius: 0;
	box-shadow: none;
	order: 3;
}
`

export function SearchBlock(props: Props) {
	const {iconImg, name, loader} = useContext(userContext)
	return (
		<UserBlockContainer {...props}>
			<UserBlock avatarSrc={iconImg} username={name} loader={loader}/>
		</UserBlockContainer>
	);
}
