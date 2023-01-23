import React, {useContext} from 'react';
import styles from './nameauthor.css';
import {cardContext} from "../../../../../context/cardContext";

export function NameAuthor() {
	const objArrFromContext: any = useContext(cardContext)
	const nameAuthor = objArrFromContext.author
	const linkAuthor = objArrFromContext.subreddit_name_prefixed;
  return (
	  <a className={styles.nameAuthor} href={`https://www.reddit.com/${linkAuthor}`} target={'_blank'} >
		  {nameAuthor}
	  </a>
  );
}
