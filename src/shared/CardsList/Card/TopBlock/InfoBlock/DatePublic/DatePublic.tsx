import React, {useContext} from 'react';
import styles from './datepublic.css';
import {cardContext} from "../../../../../context/cardContext";
import {useGetDateCreate} from "../../../../../hooks/useGetDateCreate";

export function DatePublic() {
    const objArrFromContext: any = useContext(cardContext)
    const dateCreate = useGetDateCreate(objArrFromContext.created)
  return (
      <div className={styles.parentDate}>
        <span className={styles.datePublicNoneMobile}>опубликовано&nbsp;</span>
        <span className={styles.datePublic}>
         {dateCreate} назад
        </span>
      </div>
  );
}
