import React, {useContext} from 'react';
import styles from './avatarautor.css';
import {cardContext} from "../../../../../context/cardContext";

export function AvatarAutor() {
	const objArrFromContext: any = useContext(cardContext)
	const imgUrl = objArrFromContext.sr_detail.icon_img
	if (imgUrl==='') {
		return (
			<div className={styles.imgBack}>
			</div>
		);
	}
	return (
		<div className={styles.imgBackNoImg}>
			<img style={{width: 20, height: 20}} alt={'img'} src={imgUrl}></img>
		</div>
	);

}