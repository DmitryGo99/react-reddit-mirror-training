import React from 'react';
import styles from './blockdropdown.css';
import {Icon} from "../../../Icon/Icon";
import ReactDOM from "react-dom";
import styled from 'styled-components'

interface IDrop {
	positionTop?: any;
	positionRight?: any;
	children?: React.ReactNode
}

const SBlock = styled.div`
	position: absolute;
	padding: 0 20px;
	min-width: 140px;
	background-color: #FFF;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
	z-index: 8;	
	@media ${props => props.theme.media.tablet} {
		top: 90px;
  }
`
const SBtn = styled.button`
position: relative;
left: -20px;
width: calc(100% + (20px * 2));
padding: 11px 0;
background-color: #D9D9D9;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #666666;	
@media ${props => props.theme.media.desctop} {
	display: none;
}
`

const SList = styled.ul`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`

const SIcoItem = styled.div`
	display: inline-block;
	position: relative;
	top: 2px;
	margin-right: 5px;
	& path {
		transition: all .3s ease-in-out;
	}
`



export function BlockDropdown(props: IDrop) {
	const node = document.querySelector('#dropdown_root')
	if (!node) return null
	return ReactDOM.createPortal((
		<SBlock {...props} style={{top: props.positionTop, left: props.positionRight}}>
			<SList {...props}>
				<li className={styles.item + ' ' + styles.comment}>
					<a href={'#'} className={styles.link + ' ' + styles.comment}>
						<SIcoItem {...props}>
							<Icon size={15} name={'CommentIcon'}></Icon>
						</SIcoItem>
						Комментарий
					</a>
				</li>
				<li className={styles.item + ' ' + styles.share}>
					<a href={'#'} className={styles.link + ' ' + styles.share}>
						<SIcoItem {...props}>
							<Icon size={15} name={'ShareIcon'}></Icon>
						</SIcoItem>
						Поделиться
					</a>
				</li>
				<li className={styles.item + ' ' + styles.hide}>
					<a href={'#'} className={styles.link + ' ' + styles.hide}>
						<SIcoItem {...props}>
							<Icon size={15} name={'HideIcon'}></Icon>
						</SIcoItem>
						Скрыть
					</a>
				</li>
				<li className={styles.item + ' ' + styles.save}>
					<a href={'#'} className={styles.link + ' ' + styles.save}>
						<SIcoItem {...props}>
							<Icon size={15} name={'SaveIcon'}></Icon>
						</SIcoItem>
						Сохранить
					</a>
				</li>
				<li className={styles.item + ' ' + styles.report}>
					<a href={'#'} className={styles.link + ' ' + styles.report}>
						<SIcoItem {...props}>
							<Icon size={15} name={'ReportIcon'}></Icon>
						</SIcoItem>
						Пожаловаться
					</a>
				</li>
			</SList>
			<SBtn {...props}>
				Закрыть
			</SBtn>
		</SBlock>
	), node);
}


