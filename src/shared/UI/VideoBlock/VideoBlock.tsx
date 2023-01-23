import React from 'react';
import styles from './videoblock.css';
import ReactPlayer from 'react-player'

interface IVideo {
  props?: string;
}

export function VideoBlock(props: IVideo) {
  if (props.props !== '' && props.props) {
    return (
        <div className={styles.block}>
          <ReactPlayer controls={true} url={props.props}/>
        </div>
    );
  } else {
    return (
        <div style={{display: 'none'}}></div>
    )
  }

}
