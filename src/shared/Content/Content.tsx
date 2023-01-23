import React from 'react';
import styles from './content.css';

interface IcontentProps {
	children?: React.ReactNode;
}

export function Content({children}: IcontentProps) {
	return (
		<div>

			<main className={styles.content}>
				{children}
			</main>

		</div>
	);
}
