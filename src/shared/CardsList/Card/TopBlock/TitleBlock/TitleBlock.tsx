import React, {useContext, useEffect, useRef, useState} from 'react';
import {cardContext} from "../../../../context/cardContext";
import {Post} from "../../../../Post";
import {Link, Route} from "react-router-dom";
import styled from 'styled-components'

type Props = {
  children?: React.ReactNode
}

const STitle = styled.h2`
	font-weight: 300;
	font-size: 16px;
	line-height: 19px;
	color: #333333;
	@media ${props => props.theme.media.tablet} {
		font-style: normal;
		font-weight: 400;
		font-size: 20px;
		line-height: 23px;
		color: #333333;
		cursor: pointer;
		transition: all .2s ease-in-out;
		&:hover {
			color: #CC6633;
			transform: scale(1.03);
		}
		&:active {
			color: #CC3361;
			transform: scale(.98);
		}
	}
`

export function TitleBlock(props: Props) {
	const objArrFromContext: any = useContext(cardContext)
	const titleCard = objArrFromContext.title
	const [isModalOpened, setIsModalOpened] = useState(false)
	const ref = useRef<HTMLHeadingElement>(null)
	let positionTitleTop: any = ref.current?.getBoundingClientRect().top
	let positionTitleLeft: any = ref.current?.getBoundingClientRect().left
	const path = `/posts/id:${objArrFromContext.id}`
	
	const position = {
		top: window.scrollY,
		left: positionTitleLeft + window.scrollX,
	}
	useEffect(()=> {
		if (window.location.pathname === path) {
			setIsModalOpened(true)
		}
	},[window.location.pathname])
	return (

		<div>
			<Link onClick={() => {
				// setIsModalOpened(true)
			}} to={{
				pathname: path
			}}>
				<STitle ref={ref} {...props}>{titleCard}</STitle>
			</Link>
			<Route strict exact path={path} >
			{
				// isModalOpened && (
					<Post path={path} position={position} key={objArrFromContext.id} title={titleCard} onClose={setIsModalOpened}/>
				// )
			}
			</Route>
		</div>
	);
}
