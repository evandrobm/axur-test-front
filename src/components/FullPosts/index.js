import React from 'react'
import { array } from 'prop-types'

import PostItemComponent from '../PostItem'
import FiltersComponent from '../Filters'
import SkeletonLoaderComponent from '../SkeletonLoader'

import { Container } from './styles'

const Loading = () => {
  const options = {
    lines: [
      { line: 'title', width: '50%', height: '35px', marginBottom: '5px' },
      { line: 'info', width: '150px', height: '14px', marginBottom: '25px' },
      { line: 'paragraph', marginBottom: '5px' }
    ],
    width: '750px'
  }
  return (
    <>
      <SkeletonLoaderComponent {...options} />
      <SkeletonLoaderComponent {...options} />
      <SkeletonLoaderComponent {...options} />
    </>
  )
}

const FullPosts = ({ posts, authors }) => {
  return (
    <Container>
      <FiltersComponent authors={authors} />
      {!posts || posts.length === 0 ? (
        <Loading />
      ) : (
        posts.map((post, index) => (
          <PostItemComponent key={index} post={post} />
        ))
      )}
    </Container>
  )
}

FullPosts.propTypes = {
  posts: array,
  authors: array
}

export default FullPosts
