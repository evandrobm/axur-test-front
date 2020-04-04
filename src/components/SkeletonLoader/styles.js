import styled from 'styled-components'
import get from 'lodash/get'

const getProp = (path, defaultValue = '') => props =>
  get(props, path, defaultValue)

export const Skeleton = styled.div`
  width: ${getProp('width', '100%')};
  display: flex;
  flex-direction: column;
  margin: 25px 0 60px;
`

export const Pulse = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: linear-gradient(-90deg, #d0d0d0 0%, #d8d8d8 50%, #d0d0d0 100%);
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`

export const Line = styled.div`
  width: 100%;
  max-width: ${getProp('width', '100%')};
  height: ${getProp('height', '1rem')};
  margin-bottom: ${getProp('marginBottom', '10px')};
`
