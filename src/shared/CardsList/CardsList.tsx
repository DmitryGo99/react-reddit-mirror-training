import React, {useEffect, useRef, useState} from 'react';
import styles from './cardslist.css';
import {Card} from "./Card";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {postDataAsync} from "../store/my/action";
import {BtnScrollUp} from "../UI/BtnScrollUp";
import {Redirect, Route} from "react-router-dom";
import {PrescriptionToAuth} from "../UI/PrescriptionToAuth";

export interface IPostData {
	postData?: {
		after?: string,
		arrPosts?: Array<any>,
	}
}

export function CardsList() {
	const dispatch: any = useDispatch()
	const [postRedux, setPostRedux] = useState<any[]>([])
	const [afterRedux, setAfterRedux] = useState('');
	const arrPostsRedux = useSelector<RootState, IPostData>(state => state.post).postData?.arrPosts;
	const afterNextRedux = useSelector<RootState, IPostData>(state => state.post).postData?.after;
	const [countLoad, setCountLoad] = useState<number>(0)
	const [loadButton, setLoadButton] = useState<boolean>(false)
	const [loader, setLoader] = useState<boolean>(false)
	const [prescription, setPrescription] = useState<boolean>(false)
	const [loaderNewList, setLoaderNewList] = useState<boolean>(false)
	const [scrollUpBtn, setScrollUpBtn] = useState<boolean>(false)
	const token = useSelector<RootState, string>(state => state.token);
	const bottomOfList = useRef<HTMLDivElement>(null);
	const scrollUp = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	}
	useEffect(() => {
		window.addEventListener("scroll", () => {
			const scrollY = window.scrollY
			scrollY > 600 ? setScrollUpBtn(true) : setScrollUpBtn(false);
		})
	}, []);

	useEffect(() => {
		if (arrPostsRedux) setPostRedux((prevPostsRedux: any) => prevPostsRedux.concat(...arrPostsRedux))
		setLoaderNewList(false)
	}, [arrPostsRedux])

	useEffect(() => {
		if (afterNextRedux) setAfterRedux(afterNextRedux)
	}, [afterNextRedux])

	useEffect(() => {
		if (postRedux.length > 0 || token === '' || token === 'undefined' || token === undefined) {
			setLoader(false)
		} else {
			setLoader(true)
		}
	}, [postRedux, token])

	useEffect(() => {
		if (token === '' || token === 'undefined' || token === undefined) {
			setPrescription(false)
		} else {
			setPrescription(true)

		}
	}, [token, ])

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
				if (token === '' || token === 'undefined') return
				if (countLoad === 3) {
					setLoadButton(true)
					setCountLoad(0)
					return
				}
				if (entries[0].isIntersecting) {
					dispatch(postDataAsync(afterRedux))
					setCountLoad(countLoad + 1)
					setLoadButton(false)
					if (countLoad !== 0) setLoaderNewList(true)
				}
			},
			{
				rootMargin: '10px'
			},
		);
		if (bottomOfList.current) {
			observer.observe(bottomOfList.current)
		}

		return () => {
			if (bottomOfList.current) {
				observer.unobserve(bottomOfList.current)
			}
		}

	}, [bottomOfList.current, afterRedux, loadButton])
	
	return (
		<div>
			<ul className={styles.cardsList}>
				{
					postRedux.map((value: { data: { id: any; }; }) =>
						<Card key={value.data.id} dataCard={value.data}/>
					)

				}

				<div ref={bottomOfList}></div>
				{
					loadButton &&
					<button className={styles.btnLoad} onClick={() => {
						setLoadButton(false)
						setLoaderNewList(true)
					}}>Загрузить еще</button>
				}
				<div ref={bottomOfList}></div>
				{
					loader && <div className={styles.loading}>Loading&#8230;</div>
				}

				{
					loaderNewList &&
					<div className={styles.loader} style={{position: 'relative', left: '50%', padding: '10px'}}></div>
				}

				{
					scrollUpBtn &&
					<div onClick={scrollUp} style={{position: "fixed", right: '50px', bottom: '100px'}}><BtnScrollUp/>
					</div>
				}
			</ul>
			<Route path="/">
				{prescription ? <Redirect to="/posts" /> : <PrescriptionToAuth/>}
			</Route>
		</div>

	);
}