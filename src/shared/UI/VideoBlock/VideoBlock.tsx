import React from 'react';
import ReactPlayer from 'react-player'
import styled from 'styled-components'


interface IVideo {
  props?: any;
}

const SBlock = styled.div`
  display: flex;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-content: center;
	padding: 10px;
`

export function VideoBlock(props: IVideo) {
  if (props.props !== '' && props.props) {
    return (
        <SBlock {...props}>
          <ReactPlayer controls={true} url={props.props}/>
        </SBlock>
    );
  } else {
    return (
        <div style={{display: 'none'}}></div>
    )
  }

}
