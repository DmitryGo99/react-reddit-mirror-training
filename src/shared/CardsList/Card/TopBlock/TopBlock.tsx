import React from 'react';
import {InfoBlock} from "./InfoBlock";
import {TitleBlock} from "./TitleBlock";
import styled from 'styled-components';

type Props = {
  children?: React.ReactNode
}

const STopBlock = styled.div`
	padding-left: 20px;
	padding-right: 20px;
	@media ${props => props.theme.media.tablet} {
		display: flex;
		flex-direction: column-reverse;
		justify-content: center;
		flex-basis: 75.6%;
		padding-left: 0;
		padding-right: 0;
	}
`

export function TopBlock(props: Props) {
	return (
		<STopBlock {...props}>
			<div style={{margin: '0 0 10px 0'}}><InfoBlock/></div>
			<div style={{margin: '0 0 13px 0'}}><TitleBlock/></div>
		</STopBlock>
	);
}
