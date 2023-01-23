import React, {useContext} from 'react';

import styles from './midblock.css';
import {cardContext} from "../../../context/cardContext";

interface ICardPreviewProps {
		previewImg?: string
		title?: string
	}

export function MidBlock({previewImg, title}:ICardPreviewProps) {
		const objArrFromContext: any = useContext(cardContext)
		const preview = objArrFromContext.url_overridden_by_dest
		const titleCard = objArrFromContext.title
		return (
				<div className={styles.parentImg}>
					<img
						style={{width: '100%', height: '100%', margin: '0'}}
						src={ preview?.toString()?.endsWith('.jpg') ? preview : 'https://cdn.dribbble.com/userupload/4147917/file/original-7cbd55f48d35b851a71a2d6abeb44e1a.jpg?compress=1&resize=752x'}
						alt={titleCard} />
				</div>
			);

}
