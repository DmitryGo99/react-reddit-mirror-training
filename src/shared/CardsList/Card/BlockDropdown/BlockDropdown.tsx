import React from 'react';
import styles from './blockdropdown.css';
import {Icon} from "../../../Icon/Icon";
import ReactDOM from "react-dom";

interface IDrop {
	positionTop?: any;
	positionRight?: any;
}

export function BlockDropdown(props: IDrop) {
	const node = document.querySelector('#dropdown_root')
	if (!node) return null
	return ReactDOM.createPortal((
		<div className={styles.block} style={{top: props.positionTop, left: props.positionRight}}>
			<ul className={styles.list}>
				<li className={styles.item + ' ' + styles.comment}>
					<a href={'#'} className={styles.link + ' ' + styles.comment}>
						<div className={styles.icoItem}>
							<Icon size={15} name={'CommentIcon'}></Icon>
						</div>
						Комментарий
					</a>
				</li>
				<li className={styles.item + ' ' + styles.share}>
					<a href={'#'} className={styles.link + ' ' + styles.share}>
						<div className={styles.icoItem}>
							<Icon size={15} name={'ShareIcon'}></Icon>
						</div>
						Поделиться
					</a>
				</li>
				<li className={styles.item + ' ' + styles.hide}>
					<a href={'#'} className={styles.link + ' ' + styles.hide}>
						<div className={styles.icoItem}>
							<Icon size={15} name={'HideIcon'}></Icon>
						</div>
						Скрыть
					</a>
				</li>
				<li className={styles.item + ' ' + styles.save}>
					<a href={'#'} className={styles.link + ' ' + styles.save}>
						<div className={styles.icoItem}>
							<Icon size={15} name={'SaveIcon'}></Icon>
						</div>
						Сохранить
					</a>
				</li>
				<li className={styles.item + ' ' + styles.report}>
					<a href={'#'} className={styles.link + ' ' + styles.report}>
						<div className={styles.icoItem}>
							<Icon size={15} name={'ReportIcon'}></Icon>
						</div>
						Пожаловаться
					</a>
				</li>
			</ul>
			<button className={styles.btn}>
				Закрыть
			</button>
		</div>
	), node);
}


