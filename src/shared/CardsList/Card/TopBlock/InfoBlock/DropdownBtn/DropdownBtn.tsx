import React from 'react';
import styles from './dropdownbtn.css';
import {MenuIcons} from "../../../../../icons";

interface IActiveProps {
    iaAt?: boolean;
}

export function DropdownBtn(props: IActiveProps) {
  return (
    <button
        style={{
        backgroundColor: props.iaAt ? 'rgba(51, 51, 51, 0.1)' : '',
    }}
        className={styles.btn}>
        <div className={styles.svg}>
            <MenuIcons />
        </div>

    </button>
  );
}
