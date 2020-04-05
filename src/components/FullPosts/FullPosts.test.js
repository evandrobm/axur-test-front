import React from 'react'
import { render, screen } from '../../test-utils'

import FullPosts from './index'

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

const posts = [
  {
    title: 'Post Mock 1',
    body: 'Post body 1',
    metadata: { publishedAt: 1492004832000 },
    author: { id: 1, name: 'Evandro' },
    ref: null
  },
  {
    title: 'Post Mock 2',
    body: 'Post body 2',
    metadata: { publishedAt: 1492004832000 },
    author: { id: 2, name: 'Not Evandro' },
    ref: null
  }
]

describe('Full Post list Components tests', () => {
  it('should render a list of posts', () => {
    render(<FullPosts posts={posts} authors={authors} />)
    expect(screen.getByText('Post Mock 1')).toBeInTheDocument()
    expect(screen.getByText('Evandro - 12/04/2017 10:47')).toBeInTheDocument()
    expect(screen.getByText('Post body 1')).toBeInTheDocument()

    expect(screen.getByText('Post Mock 2')).toBeInTheDocument()
    expect(
      screen.getByText('Not Evandro - 12/04/2017 10:47')
    ).toBeInTheDocument()
    expect(screen.getByText('Post body 2')).toBeInTheDocument()
  })
  it('should match snapshot with posts', () => {
    const { container } = render(<FullPosts posts={posts} authors={authors} />)
    expect(container).toMatchSnapshot()
  })
  it('should match snapshot without posts', () => {
    const { container } = render(<FullPosts posts={[]} authors={authors} />)
    expect(container).toMatchSnapshot()
  })
})
