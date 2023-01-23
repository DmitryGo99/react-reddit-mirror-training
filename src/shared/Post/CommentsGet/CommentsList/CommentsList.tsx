import React, {useState} from 'react';
import styles from './commentslist.css';
import {generateRandomString} from "../../../utils/getRandomString";
import {useGetDateCreate} from "../../../hooks/useGetDateCreate";
import {CountUps} from "../../../UI/CountUps";
import {Icon} from "../../../Icon/Icon";
import {ResponseForm} from "../../ResponseForm";

interface ICommentsList {
	data: any
}

export function CommentsList(props: ICommentsList) {
	const dateCreateComment = useGetDateCreate(props.data.created)
	const countUps = props.data.ups
	const [isResponseFormOpened, setIsResponseFormOpened] = useState(false)
	if (props.data.body) {
		if (props.data.replies) {
			if (Array.isArray(props.data.replies.data.children)) {
				const newCommentArr: Array<any> = props.data.replies.data.children
				return (
					<li className={styles.itemComment}>
						<div className={styles.count}>
							<CountUps countUps={countUps}/>
						</div>
						<div className={styles.infoBlock}>
							<img className={styles.img} alt='img icon '
								 src='https://nakleikashop.ru/images/detailed/32/Angry-010.png'/>
							<span className={styles.nameAuthor}>{props.data.author}</span>
							<span className={styles.dateCreate}>{dateCreateComment} назад</span>
						</div>
						<p className={styles.textBody}>{props.data.body}</p>
						<div className={styles.btnBlock}>
							<button onClick={() => {
								setIsResponseFormOpened(true)
							}} className={styles.buttonComment}>
								<div className={styles.iconBtn}>
									<Icon name={"CommentIcon"} size={15}/>
								</div>
								Ответить
							</button>
							<button className={styles.buttonComment}>
								<div className={styles.iconBtn}>
									<Icon name={"ShareIcon"} size={15}/>
								</div>
								Поделиться
							</button>
							<button className={styles.buttonComment}>
								<div className={styles.iconBtn}>
									<Icon name={'ReportIcon'} size={15}/>
								</div>
								Пожаловаться
							</button>
						</div>
						{
							isResponseFormOpened && (
								<ResponseForm authorComment={props.data.author} onClose={setIsResponseFormOpened}/>
							)
						}
						<ul>
							{
								newCommentArr.map(value =>
									<CommentsList data={value.data} key={generateRandomString()}/>)
							}
						</ul>
					</li>
				);
			}
		} else {
			return (
				<li className={styles.itemComment}>
					<div className={styles.count}>
						<CountUps countUps={countUps}/>
					</div>
					<div className={styles.infoBlock}>
						<img className={styles.img} alt='img icon '
							 src='https://nakleikashop.ru/images/detailed/32/Angry-010.png'/>
						<span className={styles.nameAuthor}>{props.data.author}</span>
						<span className={styles.dateCreate}>{dateCreateComment} назад</span>
					</div>
					<p className={styles.textBody}>{props.data.body}</p>
					<div className={styles.btnBlock}>
						<button onClick={() => {
							setIsResponseFormOpened(true)
						}} className={styles.buttonComment}>
							<div className={styles.iconBtn}>
								<Icon name={"CommentIcon"} size={15}/>
							</div>
							Ответить
						</button>
						<button className={styles.buttonComment}>
							<div className={styles.iconBtn}>
								<Icon name={"ShareIcon"} size={15}/>
							</div>
							Поделиться
						</button>
						<button className={styles.buttonComment}>
							<div className={styles.iconBtn}>
								<Icon name={'ReportIcon'} size={15}/>
							</div>
							Пожаловаться
						</button>
					</div>
					{
						isResponseFormOpened && (
							<ResponseForm authorComment={props.data.author} onClose={setIsResponseFormOpened}/>
						)
					}
				</li>
			);
		}
	}
	return (
		<div style={{display: 'none'}}></div>
	)
}
