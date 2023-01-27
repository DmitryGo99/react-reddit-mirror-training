import React, {useContext} from 'react';
import {cardContext} from "../../../context/cardContext";
import styled from 'styled-components'


const SParentImg = styled.div`
	position: relative;
	width: 320px;
	height: 178px;
	
	@media ${props => props.theme.media.phone} {
		width: 450px;
		height: 250px;
	}
	@media ${props => props.theme.media.tablet} {
		width: 190px;
		height: 107px;
		margin-right: 10px;
	}

`

interface ICardPreviewProps {
		previewImg?: string
		title?: string
		children?: React.ReactNode
}

export function MidBlock(props:ICardPreviewProps) {
		const objArrFromContext: any = useContext(cardContext)
		const preview = objArrFromContext.url_overridden_by_dest
		const titleCard = objArrFromContext.title
		return (
				<SParentImg {...props}>
					<img
						style={{width: '100%', height: '100%', margin: '0'}}
						src={ preview?.toString()?.endsWith('.jpg') ? preview : 'https://cdn.dribbble.com/userupload/4147917/file/original-7cbd55f48d35b851a71a2d6abeb44e1a.jpg?compress=1&resize=752x'}
						alt={titleCard} />
				</SParentImg>
			);

}
