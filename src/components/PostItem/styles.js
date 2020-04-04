import styled from 'styled-components'

export const Post = styled.div`
  width: 100%;
  max-width: 750px;
  display: flex;
  flex-direction: column;
`

export const Separator = styled.hr`
  margin: 15px 0;
  width: 100%;
  border: none;
  border-top: 1px solid #aaaaaa;
`

export const PostWrapper = styled.div`
  transition: all 250ms;
  border-radius: 5px;
  padding: 15px;

  &:hover {
    background: #dddddd;
  }
`

export const PostTitle = styled.h1`
  margin: 0;
  font-size: 1.35rem;
  line-height: 1.15em;
  color: #444444;
  font-weight: 700;
`

export const PostDate = styled.span`
  margin: 0;
  font-size: 0.75rem;
  line-height: 1.25em;
  color: #444444;
  font-weight: 300;
`

export const PostBody = styled.p`
  margin: 10px 0;
  font-size: 0.9rem;
  line-height: 1.35em;
  color: #444444;
`
