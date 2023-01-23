import React, {useContext, useEffect, useRef, useState} from 'react';
import styles from './titleblock.css';
import {cardContext} from "../../../../context/cardContext";
import {Post} from "../../../../Post";
import {Link, Route} from "react-router-dom";


export function TitleBlock() {
	const objArrFromContext: any = useContext(cardContext)
	const titleCard = objArrFromContext.title
	const [isModalOpened, setIsModalOpened] = useState(false)
	const ref = useRef<HTMLHeadingElement>(null)
	let positionTitleTop: any = ref.current?.getBoundingClientRect().top
	let positionTitleLeft: any = ref.current?.getBoundingClientRect().left
	const path = `/posts/id:${objArrFromContext.id}`
	const position = {
		top: positionTitleTop + window.scrollY,
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
				<h2 ref={ref} className={styles.title}>{titleCard}</h2>
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
