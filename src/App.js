import React from 'react'
import HomeContainer from './containers/Home'
import { FiltersProvider } from './contexts/filters'

const App = () => (
  <FiltersProvider>
    <HomeContainer />
  </FiltersProvider>
)

export default App
