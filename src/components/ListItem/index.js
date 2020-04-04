import React from 'react'
import { object, func } from 'prop-types'
import get from 'lodash/get'
import truncate from 'lodash/truncate'

import { Item, ItemTitle, ItemDescription } from './styles'

const ListItem = ({ post, handleClick }) => (
  <Item onClick={handleClick}>
    <ItemTitle>{get(post, 'title')}</ItemTitle>
    <ItemDescription>
      {truncate(get(post, 'body'), { length: 45 })}
    </ItemDescription>
  </Item>
)
ListItem.propTypes = {
  post: object,
  handleClick: func
}

export default ListItem
