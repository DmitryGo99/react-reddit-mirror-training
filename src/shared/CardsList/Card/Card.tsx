import React from 'react';
import styles from './card.css';
import {TopBlock} from "./TopBlock";
import {MidBlock} from "./MidBlock";
import {BottomBlock} from "./BottomBlock";
import {Dropdown} from "../../UI/Dropdown";
import {cardContext} from "../../context/cardContext";


interface INewCard {
	dataCard?: any;
	card?: any
}


export function Card(props: INewCard) {
	return (
		<li className={styles.card}>
			<cardContext.Provider value={props.dataCard}>
				<TopBlock/>
				<MidBlock/>
				<BottomBlock/>
				<Dropdown/>
			</cardContext.Provider>
		</li>

	);
}

