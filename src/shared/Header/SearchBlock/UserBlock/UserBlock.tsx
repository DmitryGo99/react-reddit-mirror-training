import React from 'react';
import styles from './userblock.css';
import {Icon} from "../../../Icon/Icon";

interface IUserBlockProps {
	avatarSrc?: string;
	username?: string;
	loader?: boolean
}

export function UserBlock({avatarSrc, username, loader}: IUserBlockProps) {
	return (
		<a href="https://www.reddit.com/api/v1/authorize?client_id=gsPrKrOtfMuSQTh4N26WjQ&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
		   className={styles.userBox}>
			<div className={styles.avatarBox}>
				{
					avatarSrc ? <img src={avatarSrc} alt={'user avatar'} className={styles.avatarImage}/> :
						<Icon name={"AnonIcon"}/>
				}
			</div>
			<div className={styles.userBox}>
				{
					loader ? 'загрузка...'
						: username ? <span className={styles.nameUser + ' ' + styles.nameActive}>{username}</span>
							: <span className={styles.nameUser + ' ' + styles.nameAnon}>Аноним</span>
				}
			</div>
		</a>
	);
}
