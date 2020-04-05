import React from 'react'
import { render, screen } from '../../test-utils'

import Filters, { handleChange } from './index'

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

const unsortedAuthors = [
  {
    id: 1,
    name: 'Author B'
  },
  {
    id: 2,
    name: 'Author A'
  }
]

describe('Filter Components tests', () => {
  it('should render select for sorting', () => {
    render(<Filters />)
    expect(screen.getByText('Newer')).toBeInTheDocument()
    expect(screen.getByText('Older')).toBeInTheDocument()
  })
  it('should render select for author filter', () => {
    render(<Filters authors={authors} />)
    expect(screen.getByText('Evandro')).toBeInTheDocument()
    expect(screen.getByText('Not Evandro')).toBeInTheDocument()
  })
  it('should render select for author filter sorted alphabetically', async () => {
    const { findAllByText } = render(<Filters authors={unsortedAuthors} />)
    const items = await findAllByText(/Author [.]*/)
    expect(items[0].textContent).toBe('Author A')
    expect(items[1].textContent).toBe('Author B')
    expect(items).toHaveLength(2)
  })
  it('should handle change in contexts', () => {
    const setter = jest.fn()
    handleChange(setter)({ target: { value: 1 } })
    expect(setter).toHaveBeenCalledWith(1)
    handleChange(setter)({ target: { value: '1' } })
    expect(setter).toHaveBeenCalledWith('1')
    expect(setter).toHaveBeenCalledTimes(2)
  })
  it('should match snapshot', () => {
    const { container } = render(<Filters authors={authors} />)
    expect(container).toMatchSnapshot()
  })
})
