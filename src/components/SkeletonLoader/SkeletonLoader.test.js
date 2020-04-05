import React from 'react'
import { render } from '../../test-utils'

import SkeletonLoader from './index'
import { getProp } from './styles'

const lines = [
  { line: 'title', width: '50%', height: '35px', marginBottom: '5px' },
  { line: 'info', width: '150px', height: '14px', marginBottom: '25px' },
  { line: 'paragraph', marginBottom: '5px' }
]

const singleLine = [{ line: 'title' }]

describe('Skeleton Loader Component tests', () => {
  it('should match snapshot with Full Post Skeleton', () => {
    const { container } = render(<SkeletonLoader lines={lines} width="100%" />)
    expect(container).toMatchSnapshot()
  })
  it('should match snapshot with single line and fixed Skeleton width', () => {
    const { container } = render(
      <SkeletonLoader lines={singleLine} width="300px" />
    )
    expect(container).toMatchSnapshot()
  })
  it('should handle getting props correctly', () => {
    const props = {
      foo: 'bar'
    }
    expect(getProp('foo')(props)).toBe('bar')
    expect(getProp('bar')(props)).toBe('')
    expect(getProp('bar', 'default')(props)).toBe('default')
  })
  it('should match snapshot with empty Skeleton', () => {
    const { container } = render(<SkeletonLoader lines={[]} />)
    expect(container).toMatchSnapshot()
  })
})
