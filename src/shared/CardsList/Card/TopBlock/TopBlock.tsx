import React from 'react';
import styles from './topblock.css';
import {InfoBlock} from "./InfoBlock";
import {TitleBlock} from "./TitleBlock";

export function TopBlock() {
	return (
		<div className={styles.topBlock}>
			<div className={styles.infoBlock}><InfoBlock/></div>
			<div className={styles.titleBlock}><TitleBlock/></div>
		</div>
	);
}
