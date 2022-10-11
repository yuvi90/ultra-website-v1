import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyles'
 import { NavBar } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <NavBar />
    </BrowserRouter>
  )
}

export default App