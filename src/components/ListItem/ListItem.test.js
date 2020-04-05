import React from 'react'
import { render, screen, fireEvent } from '../../test-utils'

import ListItem from './index'

const postOne = {
  title: 'Post Mock',
  body:
    'Post body with more than 45 charatcters so we can test if the component is truncating the body content'
}

const postTwo = {
  title: 'Post Mock Small',
  body: 'Post body with less than 45 charatcters'
}

const mockClick = jest.fn()

describe('Single Post item on list Component tests', () => {
  it('should render a post with big body', () => {
    render(<ListItem post={postOne} />)
    expect(screen.getByText('Post Mock')).toBeInTheDocument()
    expect(
      screen.getByText('Post body with more than 45 charatcters so...')
    ).toBeInTheDocument()
  })
  it('should render a post with small body', () => {
    render(<ListItem post={postTwo} />)
    expect(screen.getByText('Post Mock Small')).toBeInTheDocument()
    expect(
      screen.getByText('Post body with less than 45 charatcters')
    ).toBeInTheDocument()
  })
  it('should handle click on the item', () => {
    const { getByText } = render(
      <ListItem post={postOne} handleClick={mockClick} />
    )
    fireEvent.click(getByText('Post Mock'))
    expect(mockClick).toHaveBeenCalled()
  })
  it('should match snapshot', () => {
    const { container } = render(
      <ListItem post={postOne} handleClick={mockClick} />
    )
    expect(container).toMatchSnapshot()
  })
})
