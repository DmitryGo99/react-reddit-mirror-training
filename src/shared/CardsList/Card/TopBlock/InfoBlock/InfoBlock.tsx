import React from 'react';
import styles from './infoblock.css';
import {AvatarAutor} from "./AvatarAutor";
import {NameAuthor} from "./NameAuthor";
import {DatePublic} from "./DatePublic";

export function InfoBlock() {
  return (
    <div className={styles.infoBlock}>
      <AvatarAutor/>
      <NameAuthor/>
      <DatePublic/>
    </div>
  );
}
