import React from 'react';
import styled from 'styled-components'

type Props = {
  children?: React.ReactNode
}

const SortBlockContainer = styled.div`
  background-color: var(--white);
  padding: 11px 20px;
  border-radius: 7px;
  margin: 0 0 20px;
  @media ${props => props.theme.media.tablet} {
    background-color: transparent;
    padding: 0;
    margin: 0;
    border-radius: 0;
  }
`

export function SortBlock(props: Props) {
  return (
  <SortBlockContainer {...props}> sorting dropdown </SortBlockContainer>
  );
}
