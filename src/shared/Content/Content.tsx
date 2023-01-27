import React from 'react';
import styled from 'styled-components'


interface IcontentProps {
	children?: React.ReactNode;
}

const SContent = styled.main`
overflow: hidden;
@media ${props => props.theme.media.tablet} {
	background-color: var(--white);
    border-radius: 7px 7px 0 0;
}
`


export function Content(props: IcontentProps) {
	return (
		<div>

			<SContent {...props}>
				{props.children}
			</SContent>

		</div>
	);
}
