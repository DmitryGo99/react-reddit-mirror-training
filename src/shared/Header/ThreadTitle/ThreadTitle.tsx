import React from 'react';
import styled from 'styled-components'

type Props = {
  children?: React.ReactNode
}

const SThreadTitle = styled.h1`
font-weight: normal;
padding: 0 20px;
font-size: 20px;
line-height: 23px;
margin: 0 0 15px;
@media ${props => props.theme.media.tablet} {
  padding: 0;
  margin: 0 27px 0 0;
  font-size: 28px;
  line-height: 33px;
}
`

export function ThreadTitle(props: Props) {
  return (
  <SThreadTitle {...props} >Header</SThreadTitle>
  );
}
