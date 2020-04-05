import { render } from '@testing-library/react'
import { FiltersProvider } from './contexts/filters'

const customRender = (ui, options) =>
  render(ui, { wrapper: FiltersProvider, ...options })

export * from '@testing-library/react'
export { customRender as render }
