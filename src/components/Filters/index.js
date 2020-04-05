import React, { useMemo } from 'react'
import { array } from 'prop-types'
import get from 'lodash/get'

import { Container, AuthorSelect, SortSelect } from './styles'
import { useFilters } from '../../contexts/filters'

export const handleChange = setter => event => {
  const {
    target: { value }
  } = event
  setter(value)
}

const Filters = ({ authors }) => {
  const { setSortBy, setAuthorFilter } = useFilters()
  const sortedAuthors = useMemo(
    () => authors.sort((a, b) => get(a, 'name').localeCompare(get(b, 'name'))),
    [authors]
  )

  return (
    <Container>
      <AuthorSelect onChange={handleChange(setAuthorFilter)}>
        <option value="">Select an author to filter...</option>
        {sortedAuthors.map(author => (
          <option key={get(author, 'id')} value={get(author, 'id')}>
            {get(author, 'name')}
          </option>
        ))}
      </AuthorSelect>
      <SortSelect onChange={handleChange(setSortBy)} defaultValue="desc">
        <option value="asc">Newer</option>
        <option value="desc">Older</option>
      </SortSelect>
    </Container>
  )
}

Filters.propTypes = {
  authors: array
}

Filters.defaultProps = {
  authors: []
}

export default Filters
