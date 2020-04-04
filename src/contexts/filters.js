import React, { createContext, useState, useContext } from 'react'
import { node } from 'prop-types'

export const FiltersContext = createContext()

export const FiltersProvider = ({ children }) => {
  const [sortBy, setSortBy] = useState('desc')
  const [authorFilter, setAuthorFilter] = useState('')

  return (
    <FiltersContext.Provider
      value={{ sortBy, setSortBy, authorFilter, setAuthorFilter }}
    >
      {children}
    </FiltersContext.Provider>
  )
}

FiltersProvider.propTypes = {
  children: node
}

export const useFilters = () => useContext(FiltersContext)
