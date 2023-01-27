import React from 'react';
import {AvatarAutor} from "./AvatarAutor";
import {NameAuthor} from "./NameAuthor";
import {DatePublic} from "./DatePublic";
import styled from 'styled-components'

type Props = {
  children?: React.ReactNode
}

const SInfoBlock = styled.div`
  display: flex;
  align-items: center;
`

export function InfoBlock(props: Props) {
  return (
    <SInfoBlock {...props}>
      <AvatarAutor/>
      <NameAuthor/>
      <DatePublic/>
    </SInfoBlock>
  );
}
