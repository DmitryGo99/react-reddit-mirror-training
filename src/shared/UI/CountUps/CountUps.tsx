import React, {useContext, useState} from 'react';
import styles from './countups.css';
import {cardContext} from "../../context/cardContext";

interface ICount {
  countUps: number 
}

export function CountUps(props: ICount) {
  const objArrFromContext: any = useContext(cardContext)
  const countUPS = props.countUps
  const [count, setCount] = useState(countUPS);
  return (
      <div className={styles.leftPart}>
        <button onClick={() => setCount(count + 1)} className={styles.btnLeftPart + ' ' + styles.up}>
          <svg className={styles.icoUp} width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
          </svg>
        </button>
        <span className={styles.spanBot}>{count}</span>
        <button onClick={() => setCount(count - 1)} className={styles.btnLeftPart + ' ' + styles.down}>
          <svg className={styles.icoDown} width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z" fill="#C4C4C4"/>
          </svg>
        </button>
      </div>
  );
}
