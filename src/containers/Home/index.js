import React, { useState, useEffect, useMemo } from 'react'
import get from 'lodash/fp/get'

import { useFilters } from '../../contexts/filters'
import { getPosts } from '../../services/Posts'
import { getAuthors } from '../../services/Authors'

import PostListComponent from '../../components/PostList'
import FullPostsComponent from '../../components/FullPosts'

import { Container } from './styles'

const getDate = get('metadata.publishedAt')

const authorByPost = post => author =>
  get('id')(author) === get('metadata.authorId')(post)

const compareDates = sort => (a, b) =>
  sort === 'desc' ? getDate(b) - getDate(a) : getDate(a) - getDate(b)

const fetchPostsData = async (setPosts, setAuthors) => {
  const [postsRes, authorsRes] = await Promise.all([getPosts(), getAuthors()])
  setAuthors(authorsRes)
  setPosts(
    postsRes.sort(compareDates('desc')).map(post => ({
      ...post,
      author: authorsRes.find(authorByPost(post))
    }))
  )
}

const handleNavigation = post => () => {
  const reference = get('ref')(post)
  if (reference) {
    window.scrollTo(0, reference.offsetTop - 15)
  }
}

const Home = () => {
  const [posts, setPosts] = useState([])
  const [authors, setAuthors] = useState([])
  const { sortBy, authorFilter } = useFilters()

  const filteredPosts = useMemo(
    () =>
      posts
        .slice()
        .sort(compareDates(sortBy))
        .filter(post => {
          if (authorFilter === '') {
            return true
          }
          return get('author.id')(post) === parseInt(authorFilter)
        }),
    [posts, sortBy, authorFilter]
  )

  useEffect(() => {
    fetchPostsData(setPosts, setAuthors)
  }, [])

  return (
    <Container>
      <PostListComponent posts={posts} handleClick={handleNavigation} />
      <FullPostsComponent posts={filteredPosts} authors={authors} />
    </Container>
  )
}

export default Home
