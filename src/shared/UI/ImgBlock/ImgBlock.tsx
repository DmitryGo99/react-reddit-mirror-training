import React from 'react';
import styled from 'styled-components'

interface IImg {
	props?: any;
}

const SBlock = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
`

export function ImgBlock(props: IImg) {
	if (props.props && props.props !== '') {
		const urlImg = props.props
		console.log('img block url', urlImg)
		return (
			<SBlock {...props}>
				<img style={{width: '100%', height: '100%'}} alt='img' src={urlImg}></img>
			</SBlock>
		);
	} else {
		return (
			<div style={{display: "none"}}>

			</div>
		);
	}
}
