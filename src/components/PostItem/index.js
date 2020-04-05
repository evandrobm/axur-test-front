import React, { useMemo } from 'react'
import { object } from 'prop-types'
import get from 'lodash/get'
import format from 'date-fns/format'

import {
  Post,
  PostWrapper,
  PostTitle,
  PostDate,
  PostBody,
  Separator
} from './styles'

const PostItem = ({ post }) => {
  const date = useMemo(() => {
    const datetime = get(post, 'metadata.publishedAt')
    if (!datetime) {
      return ''
    }
    return format(datetime, 'dd/MM/yyyy hh:mm')
  }, [post])

  return (
    <Post
      ref={ref => {
        post.ref = ref
      }}
    >
      <PostWrapper>
        <PostTitle>{get(post, 'title')}</PostTitle>
        <PostDate>{`${get(post, 'author.name')} - ${date}`}</PostDate>
        <PostBody>{get(post, 'body')}</PostBody>
      </PostWrapper>
      <Separator />
    </Post>
  )
}

PostItem.propTypes = {
  post: object.isRequired
}

export default PostItem
