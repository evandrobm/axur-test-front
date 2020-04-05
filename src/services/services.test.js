import axios from 'axios'

import { getAuthors } from './Authors'
import { getPosts } from './Posts'

jest.mock('axios')

const posts = [
  {
    title: 'Post Mock 1',
    body: 'Post body 1',
    metadata: { publishedAt: 1492004832000, authorId: '1' }
  },
  {
    title: 'Post Mock 2',
    body: 'Post body 2',
    metadata: { publishedAt: 1492004832000, authorId: '2' }
  }
]

const authors = [
  {
    id: 1,
    name: 'Evandro'
  },
  {
    id: 2,
    name: 'Not Evandro'
  }
]

describe('Test Authors services', () => {
  it('should get a list of authors from API', async () => {
    axios.get.mockResolvedValue({ data: authors })
    const authorsData = await getAuthors()
    expect(authorsData).toBe(authors)
  })
  it('should get false if API fails', async () => {
    axios.get.mockRejectedValue(new Error('API error'))
    const authorsData = await getAuthors()
    expect(authorsData).not.toBeTruthy()
  })
})

describe('Test Post services', () => {
  it('should get a list of posts from API', async () => {
    axios.get.mockResolvedValue({ data: posts })
    const postsData = await getPosts()
    expect(postsData).toBe(posts)
  })
  it('should get false if API fails', async () => {
    axios.get.mockRejectedValue(new Error('API error'))
    const postsData = await getPosts()
    expect(postsData).not.toBeTruthy()
  })
})
