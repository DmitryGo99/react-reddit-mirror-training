import React, {useContext, useState} from 'react';
import styles from './countups.css';
import {cardContext} from "../../context/cardContext";
import styled from 'styled-components'

interface ICount {
  countUps: number 
  children?: React.ReactNode
}

const SLeftPart = styled.div`
@media ${props => props.theme.media.tablet}{
  display: flex;
	flex-direction: column;
}
`

const SIcoUp = styled.svg`
& path{
  transition: all .3s ease-in-out;
}
@media ${props => props.theme.media.desctop}{
  &:hover path{
		fill: #A4CC33;
	}
}
`
const SIcoDown = styled.svg`
& path{
  transition: all .3s ease-in-out;
}
@media ${props => props.theme.media.desctop}{
  &:hover path{
		fill: #CC3361;
	}
}
`
const SSpanBot = styled.span`
  margin-right: 4px;
	font-weight: 500;
	font-size: 12px;
	line-height: 14px;
	text-align: center;
	color: #C4C4C4;
  @media ${props => props.theme.media.tablet}{
    margin-right: 0;
		font-weight: 400;
		font-size: 14px;
		line-height: 16px;
		color: #333333;
  }
`

export function CountUps(props: ICount) {
  const objArrFromContext: any = useContext(cardContext)
  const countUPS = props.countUps
  const [count, setCount] = useState(countUPS);
  return (
      <SLeftPart {...props}>
        <button onClick={() => setCount(count + 1)} className={styles.btnLeftPart + ' ' + styles.up}>
          <SIcoUp {...props} width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
          </SIcoUp>
        </button>
        <SSpanBot {...props}>{count}</SSpanBot>
        <button onClick={() => setCount(count - 1)} className={styles.btnLeftPart + ' ' + styles.down}>
          <SIcoDown {...props} width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z" fill="#C4C4C4"/>
          </SIcoDown>
        </button>
      </SLeftPart>
  );
}
