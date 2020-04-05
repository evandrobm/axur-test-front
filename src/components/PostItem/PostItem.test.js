import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import format from 'date-fns/format'
import PostItem from './index'

const postMocked = {
  title: 'Post Mock',
  body: 'Post body',
  metadata: { publishedAt: 1492004832000 },
  author: { name: 'Evandro' },
  ref: null
}

describe('Full Post Item', () => {
  it('should render all post informations', () => {
    render(<PostItem post={postMocked} />)
    expect(screen.getByText('Post Mock')).toBeInTheDocument()
    expect(
      screen.getByText(
        `Evandro - ${format(
          postMocked.metadata.publishedAt,
          'dd/MM/yyyy hh:mm'
        )}`
      )
    ).toBeInTheDocument()
    expect(screen.getByText('Post body')).toBeInTheDocument()
  })
  it('should render without error if post is incomplete', () => {
    render(<PostItem post={{ title: 'Post Mock' }} />)
    expect(screen.getByText('Post Mock')).toBeInTheDocument()
  })
  it('should match snapshot', () => {
    const { container } = render(<PostItem post={postMocked} />)
    expect(container).toMatchSnapshot()
  })
})
