import React from 'react';
import styles from './notfoundpage.css';

export function NotFoundPage() {
	console.log('render 404')
	return (
		<p className={styles.text}>
			404 NOT FOUND: Страницы {window.location.href} не существует
		</p>
	);
}
