import React from 'react'
import { renderHook, act } from '@testing-library/react-hooks'
import { FiltersProvider, useFilters } from './filters'

const wrapper = ({ children }) => <FiltersProvider>{children}</FiltersProvider>

describe('Test Filters context custom hook', () => {
  it('should set sort by context', () => {
    const { result } = renderHook(() => useFilters(), { wrapper })
    expect(result.current.sortBy).toBe('desc')
    act(() => {
      result.current.setSortBy('asc')
    })
    expect(result.current.sortBy).toBe('asc')
  })
  it('should set selected author context', () => {
    const { result } = renderHook(() => useFilters(), { wrapper })
    expect(result.current.authorFilter).toBe('')
    act(() => {
      result.current.setAuthorFilter('1')
    })
    expect(result.current.authorFilter).toBe('1')
  })
})
