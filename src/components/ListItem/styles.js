import styled from 'styled-components'

export const Item = styled.div`
  width: 100%;
  padding: 10px 25px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 250ms;

  &:nth-child(odd) {
    background: #bbbbbb;
  }

  &:hover {
    background: #999999;
  }
`

export const ItemTitle = styled.h1`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.35em;
  color: #444444;
  font-weight: 700;
`

export const ItemDescription = styled.p`
  margin: 0;
  font-size: 0.75rem;
  line-height: 1.25em;
  color: #444444;
`
