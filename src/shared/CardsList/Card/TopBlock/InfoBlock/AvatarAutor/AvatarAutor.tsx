import React, {useContext} from 'react';
import {cardContext} from "../../../../../context/cardContext";
import styled from 'styled-components'

type Props = {
  children?: React.ReactNode
}

const SIcoAvatar = styled.div`
display: inline-block;
	width: 20px;
	height: 20px;
	background-size: 100%;
	margin-right: 7px;
`

export function AvatarAutor(props: Props) {
	const objArrFromContext: any = useContext(cardContext)
	const imgUrl = objArrFromContext.sr_detail.icon_img
	
	return (
		<SIcoAvatar {...props}>
			<img style={{width: 20, height: 20}} alt={'img'} src={imgUrl}></img>
		</SIcoAvatar>
	);

}