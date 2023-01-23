import React from 'react';
import styles from './imgblock.css';

interface IImg {
	props?: string;
}

export function ImgBlock(props: IImg) {
	if (props.props && props.props !== '') {
		const urlImg = props.props
		console.log('img block url', urlImg)
		return (
			<div className={styles.block}>
				<img className={styles.img} alt='img' src={urlImg}></img>
			</div>
		);
	} else {
		return (
			<div style={{display: "none"}}>

			</div>
		);
	}
}
