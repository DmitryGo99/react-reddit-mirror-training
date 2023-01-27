import React from 'react';
import {SearchBlock} from "./SearchBlock";
import {ThreadTitle} from "./ThreadTitle";
import {SortBlock} from "./SortBlock";
import styled from 'styled-components'


type Props = {
  children?: React.ReactNode
}

const StyledHeader = styled.header`
@media ${props => props.theme.media.tablet} {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 40px;
}
@media ${props => props.theme.media.desctop} {
  padding: 67px 0;
}
`


export function Header(props: Props) {
	return (
		<StyledHeader {...props}>
			<SearchBlock/>
			<ThreadTitle />
			<SortBlock />
		</StyledHeader>
	);
}
