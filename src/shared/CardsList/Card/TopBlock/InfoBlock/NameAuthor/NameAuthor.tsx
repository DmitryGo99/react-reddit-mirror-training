import React, {useContext} from 'react';
import {cardContext} from "../../../../../context/cardContext";
import styled, { keyframes} from 'styled-components'

type Props = {
  children?: React.ReactNode
}

const SNameAuthor = styled.a`
	font-weight: 400;
	font-size: 10px;
	line-height: 12px;
	color: #CC6633;
	margin-right: 7px;
	@media ${props => props.theme.media.tablet}{
		font-size: 14px;
		line-height: 16px;
	}
`

export function NameAuthor(props: Props) {
	const objArrFromContext: any = useContext(cardContext)
	const nameAuthor = objArrFromContext.author
	const linkAuthor = objArrFromContext.subreddit_name_prefixed;
  return (
	  <SNameAuthor {...props} href={`https://www.reddit.com/${linkAuthor}`} target={'_blank'} >
		  {nameAuthor}
	  </SNameAuthor>
  );
}
