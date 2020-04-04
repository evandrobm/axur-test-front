import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 750px;
  display: flex;
  margin-bottom: 25px;
`

export const BaseSelect = styled.select`
  height: 50px;
  padding: 0 5px;
`
export const AuthorSelect = styled(BaseSelect)`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
`
export const SortSelect = styled(BaseSelect)`
  width: 100px;
  margin-left: 15px;
`
