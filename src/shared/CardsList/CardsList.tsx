import React, {useEffect, useRef, useState} from 'react';
import {Card} from "./Card";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {postDataAsync} from "../store/my/action";
import {BtnScrollUp} from "../UI/BtnScrollUp";
import {Redirect, Route} from "react-router-dom";
import {PrescriptionToAuth} from "../UI/PrescriptionToAuth";
import styled, { keyframes} from 'styled-components'

type Props = {
  children?: React.ReactNode
}

export interface IPostData {
	postData?: {
		after?: string,
		arrPosts?: Array<any>,
	}
}

const Rotate = keyframes`
0% {
	-webkit-transform: rotate(0deg) scale(0.8);
	-moz-transform: rotate(0deg) scale(0.8);
}
50% {
	-webkit-transform: rotate(360deg) scale(1.2);
	-moz-transform: rotate(360deg) scale(1.2);
}
100% {
	-webkit-transform: rotate(720deg) scale(0.8);
	-moz-transform: rotate(720deg) scale(0.8);
}
`
const Ball1 = keyframes`
0% {
	box-shadow: 30px 0 0 #f8b334;
}
50% {
	box-shadow: 0 0 0 #f8b334;
	margin-bottom: 0;
	-webkit-transform: translate(15px,15px);
	-moz-transform: translate(15px, 15px);
}
100% {
	box-shadow: 30px 0 0 #f8b334;
	margin-bottom: 10px;
}
`
const Ball2 = keyframes`
0% {
	box-shadow: 30px 0 0 #97bf0d;
}
50% {
	box-shadow: 0 0 0 #97bf0d;
	margin-top: -20px;
	-webkit-transform: translate(15px,15px);
	-moz-transform: translate(15px, 15px);
}
100% {
	box-shadow: 30px 0 0 #97bf0d;
	margin-top: 0;
}
`

const AnimateGrow = keyframes`
0% {
	transform: scale3d(1, 1, 1);
}
50% {
	transform: scale3d(1.05, 1.05, 1.05);
}
100% {
	transform: scale3d(1, 1, 1);
}
`
const Spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const SCardList = styled.ul`
@media ${props => props.theme.media.tablet} {
	padding: 40px 0;
}
`
const SBtnLoad = styled.button`
	padding: 10px 15px;
  position: relative;
  left: 48%;
  border-radius: 20px;
  background-color: #CC6633;
  color: #FFF;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  transition: all .3s ease-in-out;
	&:hover {
		transform: scale(1.1);
	}
	&:active {
		transform: scale(.9);
  	background-color: #442211;
	}
`
const Loading = styled.div`
	position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: visible;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
	&:before {
		content: '';
		display: block;
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.3);
	}
	&:not(:required) {
		/* hide "loading..." text */
		font: 0/0 a;
		color: transparent;
		text-shadow: none;
		background-color: transparent;
		border: 0;
	}
	&:not(:required):after {
		content: '';
		display: block;
		font-size: 10px;
		width: 1em;
		height: 1em;
		margin-top: -0.5em;
		animation: ${Spinner} 1500ms infinite linear;
		border-radius: 0.5em;
		-webkit-box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.5) -1.5em 0 0 0, rgba(0, 0, 0, 0.5) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;
		box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;
	}
`
const Loader = styled.div`
	animation: ${Rotate} 1s infinite;
  height: 50px;
  width: 50px;
	&:before, &:after {
  border-radius: 50%;
  content: '';
  display: block;
  height: 20px;
  width: 20px;
	}
	&:before {
  animation: ${Ball1} 1s infinite;
  background-color: #cb2025;
  box-shadow: 30px 0 0 #f8b334;
  margin-bottom: 10px;
	}
	&:after {
  animation: ${Ball2} 1s infinite;
  background-color: #00a096;
  box-shadow: 30px 0 0 #97bf0d;
}
`


export function CardsList(props: Props) {
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
			<SCardList {...props}>
				{
					postRedux.map((value: { data: { id: any; }; }) =>
						<Card key={value.data.id} dataCard={value.data}/>
					)

				}

				<div ref={bottomOfList}></div>
				{
					loadButton &&
					<SBtnLoad {...props} onClick={() => {
						setLoadButton(false)
						setLoaderNewList(true)
					}}>Загрузить еще</SBtnLoad>
				}
				<div ref={bottomOfList}></div>
				{
					loader && <Loading {...props}>Loading&#8230;</Loading>
				}

				{
					loaderNewList &&
					<Loader {...props} style={{position: 'relative', left: '50%', padding: '10px'}}></Loader>
				}

				{
					scrollUpBtn &&
					<div onClick={scrollUp} style={{position: "fixed", right: '50px', bottom: '100px'}}><BtnScrollUp/>
					</div>
				}
			</SCardList>
			<Route path="/">
				{prescription ? <Redirect to="/posts" /> : <PrescriptionToAuth/>}
			</Route>
		</div>

	);
}