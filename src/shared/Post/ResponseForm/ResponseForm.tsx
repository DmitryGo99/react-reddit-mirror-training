import React, {ChangeEvent, FormEvent, useEffect, useRef, useState} from 'react';
import styled from 'styled-components'


interface IResponseForm {
	onClose?: (b: boolean)=> void;
	authorComment?: string;
	children?: React.ReactNode
}

const SForm = styled.form`
	display: flex;
	flex-direction: column;
`
const SInputText = styled.textarea`
height: 89px;
border: 1px solid #D9D9D9;
padding: 16px;
box-sizing: border-box;
border-radius: 3px 3px 0px 0px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
color: #999999;
resize: none;
&[aria-invalid] {
	border-color: red;
}
`
const SBtn = styled.button`
	width: 220px;
	height: 50px;
	background: #CC6633;
	border-radius: 0px 0px 3px 0px;
	align-self: flex-end;
	font-family: Roboto;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 16px;
	text-align: center;
	color: #FFFFFF;
	transition: all .3s ease-in-out;
	&:disabled {
		opacity: 0.5;
		cursor: default;
	}
	
	&:hover {
		background-color: #595900;
	}
`

export function ResponseForm(props: IResponseForm) {
	const divRef = useRef<HTMLDivElement>(null)
	const textareaRef = useRef<HTMLTextAreaElement>(null)
	const [value, setValue] = useState('')

	function handleSubmit( event: FormEvent) {
		event.preventDefault();
		console.log('submit',textareaRef.current?.value)
	}

	function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
		setValue(event.target.value)
		console.log('comment value', value)
	}

	function handleClick (event: MouseEvent) {
		if (event.target instanceof Node && !divRef.current?.contains(event.target)){
			console.log('click')
			props.onClose?.(false)
		}
	}

		useEffect(() => {
			textareaRef.current?.focus()
			document.addEventListener('click',handleClick)
			return () => {
				document.removeEventListener('click', handleClick)
			}
		}, []);
  return (
	<div ref={divRef}>
	   <SForm {...props}>
		  <SInputText {...props} ref={textareaRef}  placeholder={`reply to ${props.authorComment}`} value={value} onChange={handleChange}/>
			<SBtn {...props} onClick={handleSubmit} >
				отправить
			</SBtn>
	   </SForm>
	</div>
  );
}
