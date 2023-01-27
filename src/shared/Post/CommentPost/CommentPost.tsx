import React, {ChangeEvent, FormEvent} from 'react';
import { Formik } from "formik";
import styled from 'styled-components'


interface ICommentPost  {
	changeValue: (event: ChangeEvent<HTMLTextAreaElement>) => void;
	value: string;
	handleSubmit: (event: FormEvent)=> void
	children?: React.ReactNode
}

const SForm = styled.form`
	display: flex;
	flex-direction: column;
`
const STextArea = styled.textarea`
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
&:disabled {
	opacity: 0.5;
	cursor: default;
}
`

export function CommentPost(props: ICommentPost) {

	return (
		<div>
			<Formik
				initialValues={{ email: props.value}}

				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}
			>
				{({
					  //@ts-ignore
					  values,
					  //@ts-ignore
					  errors,
					  //@ts-ignore
					  touched,
					  //@ts-ignore
					  handleChange,
					  //@ts-ignore
					  handleBlur,
					  //@ts-ignore
					  handleSubmit,
					  //@ts-ignore
					  isSubmitting,
					  /* and other goodies */
				  }) => (
					<SForm {...props} onSubmit={props.handleSubmit}>
						<STextArea
							{...props}
							name="inputText"
							onChange={props.changeValue}
							value={props.value}
						/>
						<SBtn {...props} type="submit">
							Submit
						</SBtn>
					</SForm>
				)}
			</Formik>
		</div>
	);
}
