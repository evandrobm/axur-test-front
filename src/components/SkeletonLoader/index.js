import React from 'react'
import { arrayOf, object, string } from 'prop-types'
import get from 'lodash/get'

import { Skeleton, Pulse, Line } from './styles'

const TitleSkeleton = props => (
  <Line {...props}>
    <Pulse />
  </Line>
)

const InfoSkeleton = props => (
  <Line {...props}>
    <Pulse />
  </Line>
)

const ParagraphSkeleton = props => (
  <>
    <Line {...props}>
      <Pulse />
    </Line>
    <Line {...props}>
      <Pulse />
    </Line>
    <Line {...props}>
      <Pulse />
    </Line>
    <Line {...props}>
      <Pulse />
    </Line>
    <Line {...props}>
      <Pulse />
    </Line>
  </>
)

const skeletonTypes = {
  title: TitleSkeleton,
  info: InfoSkeleton,
  paragraph: ParagraphSkeleton
}

const SkeletonLoader = ({ lines, width }) => (
  <Skeleton width={width}>
    {lines.map(({ line, ...rest }, index) => {
      const SkeletonComponent = get(skeletonTypes, line, skeletonTypes.title)
      return <SkeletonComponent key={index} {...rest} />
    })}
  </Skeleton>
)

SkeletonLoader.propTypes = {
  lines: arrayOf(object),
  width: string
}

export default SkeletonLoader
