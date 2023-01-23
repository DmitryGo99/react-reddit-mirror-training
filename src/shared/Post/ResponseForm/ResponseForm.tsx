import React, {ChangeEvent, FormEvent, useEffect, useRef, useState} from 'react';
import styles from './responseform.css';

interface IResponseForm {
	onClose?: (b: boolean)=> void;
	authorComment?: string;
}

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
	<div className={styles.block} ref={divRef}>
	   <form className={styles.form}  >
		  <textarea className={styles.inputText} ref={textareaRef}  placeholder={`reply to ${props.authorComment}`} value={value} onChange={handleChange}/>
		 <button className={styles.btn} onClick={handleSubmit} >
		   отправить
		 </button>
	   </form>
	</div>
  );
}
