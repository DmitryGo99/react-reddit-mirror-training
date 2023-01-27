import React from 'react';
import styled from 'styled-components'

type Props = {
  children?: React.ReactNode
}

const SText = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	line-height: 100%;
	width: 500px;
	height: 500px;
	font-size: 50px;
	color: black;
`

export function NotFoundPage(props: Props) {
	console.log('render 404')
	return (
		<SText {...props}>
			404 NOT FOUND: Страницы {window.location.href} не существует
		</SText>
	);
}
