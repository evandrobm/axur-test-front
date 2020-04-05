import React, { useState } from 'react'
import { render, screen, act } from '@testing-library/react'

import * as postsService from '../../services/Posts'
import * as authorsService from '../../services/Authors'
import { FiltersContext } from '../../contexts/filters'
import Home, { handleNavigation, compareDates } from './index'

const FiltersProvider = ({ children, defaultAuthor }) => {
  const [sortBy, setSortBy] = useState('desc')
  const [authorFilter, setAuthorFilter] = useState(defaultAuthor || '')

  return (
    <FiltersContext.Provider
      value={{ sortBy, setSortBy, authorFilter, setAuthorFilter }}
    >
      {children}
    </FiltersContext.Provider>
  )
}

const wrapper = ({ children }) => <FiltersProvider>{children}</FiltersProvider>
const wrapperFiltered = ({ children }) => (
  <FiltersProvider defaultAuthor="1">{children}</FiltersProvider>
)

const posts = [
  {
    title: 'Post Mock 1',
    body: 'Post body 1',
    metadata: { publishedAt: 1492004832000, authorId: 1 },
    ref: {
      offsetTop: 100
    }
  },
  {
    title: 'Post Mock 2',
    body: 'Post body 2',
    metadata: { publishedAt: 1492004832000, authorId: 2 }
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

jest.mock('../../services/Posts')
jest.mock('../../services/Authors')

postsService.getPosts.mockResolvedValue(posts)
authorsService.getAuthors.mockResolvedValue(authors)

describe('Home container tests', () => {
  it('should handle navigation', () => {
    const scrollMock = jest.fn()
    window.scrollTo = scrollMock
    handleNavigation(posts[0])()
    expect(scrollMock).toHaveBeenCalledWith(0, 85)
    handleNavigation(posts[1])()
    expect(scrollMock).toHaveBeenCalledTimes(1)
  })
  it('should render posts', async () => {
    render(<Home />, { wrapper })
    const items = await screen.findAllByText(/Post Mock [.]*/)
    expect(items).toHaveLength(4)
  })
  it('should filter posts by author', async () => {
    render(<Home />, { wrapper: wrapperFiltered })
    const items = await screen.findAllByText(/Post Mock [.]*/)
    expect(items).toHaveLength(3)
  })
  it('should compare dates correctly', () => {
    const a = { metadata: { publishedAt: 1492004832000 } }
    const b = { metadata: { publishedAt: 1492004832001 } }
    const sortDesc = compareDates('desc')(a, b)
    const sortAsc = compareDates('asc')(a, b)
    expect(sortDesc > 0).toBeTruthy()
    expect(sortAsc < 0).toBeTruthy()
  })
  it('should match snapshot', async () => {
    await act(async () => {
      const { container } = render(<Home />, { wrapper })
      expect(container).toMatchSnapshot()
    })
  })
})
