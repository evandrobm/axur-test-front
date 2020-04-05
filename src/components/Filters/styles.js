import styled from 'styled-components'

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

export const Container = styled.div`
  width: 100%;
  max-width: 750px;
  display: flex;
  margin-bottom: 25px;

  @media (max-width: 700px) {
    flex-direction: column;
    margin-bottom: 0;
    ${BaseSelect} {
      margin-bottom: 25px;
      width: 100%;
      margin-left: 0;
    }
  }
`
