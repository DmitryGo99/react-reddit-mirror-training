import React, {ChangeEvent, FormEvent} from 'react';
import styles from './commentpost.css';
import { Formik } from "formik";

interface ICommentPost  {
	changeValue: (event: ChangeEvent<HTMLTextAreaElement>) => void;
	value: string;
	handleSubmit: (event: FormEvent)=> void
}

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
					<form className={styles.form} onSubmit={props.handleSubmit}>
						<textarea
							className={styles.input}
							name="inputText"
							onChange={props.changeValue}
							value={props.value}
						/>
						<button className={styles.button} type="submit">
							Submit
						</button>
					</form>
				)}
			</Formik>
		</div>
	);
}
