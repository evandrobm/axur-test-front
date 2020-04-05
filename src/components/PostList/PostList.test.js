import React from 'react'
import { render, screen } from '../../test-utils'

import PostList from './index'

const postOne = {
  title: 'Post Mock',
  body:
    'Post body with more than 45 charatcters so we can test if the component is truncating the body content'
}

const postTwo = {
  title: 'Post Mock Small',
  body: 'Post body with less than 45 charatcters'
}

const posts = [postOne, postTwo]

const mockPartialFunction = () => () => {}
const mockHandle = jest.fn().mockImplementation(mockPartialFunction)

describe('Posts List Component tests', () => {
  it('should render all posts in array with begin of body', () => {
    render(<PostList posts={posts} handleClick={mockPartialFunction} />)
    expect(screen.getByText('Post Mock')).toBeInTheDocument()
    expect(
      screen.getByText('Post body with more than 45 charatcters so...')
    ).toBeInTheDocument()
    expect(screen.getByText('Post Mock Small')).toBeInTheDocument()
    expect(
      screen.getByText('Post body with less than 45 charatcters')
    ).toBeInTheDocument()
  })
  it('should execute the partial function with the post object', () => {
    render(<PostList posts={posts} handleClick={mockHandle} />)
    expect(mockHandle).toBeCalledWith(postOne)
    expect(mockHandle).toBeCalledWith(postTwo)
  })
  it('should match snapshot', () => {
    const { container } = render(
      <PostList posts={posts} handleClick={mockPartialFunction} />
    )
    expect(container).toMatchSnapshot()
  })
})
