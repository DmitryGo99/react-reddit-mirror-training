import React, {useContext} from 'react';
import {cardContext} from "../../../../../context/cardContext";
import {useGetDateCreate} from "../../../../../hooks/useGetDateCreate";
import styled from 'styled-components'

type Props = {
  children?: React.ReactNode
}

const SDatePublicNoneMobile = styled.div`
  display: none;
	font-weight: 400;
	font-size: 14px;
	line-height: 16px;
	color: #999999; 
  @media ${props => props.theme.media.tablet} {
    display: inline-block;
  }
`
const SDatePublic = styled.span`
  font-weight: 400;
	font-size: 10px;
	line-height: 12px;
	color: #999999;
  @media ${props => props.theme.media.tablet} {
    font-size: 14px;
		line-height: 16px;
  }
`

export function DatePublic(props: Props) {
    const objArrFromContext: any = useContext(cardContext)
    const dateCreate = useGetDateCreate(objArrFromContext.created)
  return (
      <div style={{margin: '0 auto 0 0'}}>
        <SDatePublicNoneMobile {...props}>опубликовано&nbsp;</SDatePublicNoneMobile>
        <SDatePublic {...props}>
         {dateCreate} назад
        </SDatePublic>
      </div>
  );
}
