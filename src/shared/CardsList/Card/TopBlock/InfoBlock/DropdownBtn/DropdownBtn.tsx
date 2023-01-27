import React from 'react';
import {MenuIcons} from "../../../../../icons";
import styled from 'styled-components'

interface IActiveProps {
    iaAt?: boolean;
    children?: React.ReactNode
}

const SBtn = styled.button`
position: absolute;
	right: 14px;
	top: 17px;
	bottom: 2px;
	width: 31px;
	height: 31px;
	border-radius: 50%;
	transition: all .3s ease-in-out;
  @media ${props => props.theme.media.tablet} {
    transform: rotate(90deg);
		top: 33px;
		right: 90px;
  }
  @media ${props => props.theme.media.desctop} {
    transform: rotate(90deg);
		top: 56px;
		right: 90px;
    &:hover {
      background-color: rgba(51, 51, 51, 0.1);
    }
  }
`

const Svg = styled.div`
  position: relative;
	top: -2px;
`

export function DropdownBtn(props: IActiveProps) {
  return (
    <SBtn
        style={{
        backgroundColor: props.iaAt ? 'rgba(51, 51, 51, 0.1)' : '',
    }}
        {...props}>
        <Svg {...props}>
            <MenuIcons />
        </Svg>

    </SBtn>
  );
}
