import React from 'react'
import { array, func } from 'prop-types'

import ListItemComponent from '../ListItem'

import { Container, BlogHeader, BlogTitle } from './styles'

const PostList = ({ posts, handleClick }) => (
  <Container>
    <BlogHeader>
      <BlogTitle>Mocky Blog</BlogTitle>
    </BlogHeader>
    {posts.map((post, index) => (
      <ListItemComponent
        key={index}
        post={post}
        handleClick={handleClick(post)}
      />
    ))}
  </Container>
)

PostList.propTypes = {
  posts: array,
  handleClick: func
}

export default PostList
