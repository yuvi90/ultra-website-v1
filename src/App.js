// Dependencies
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import { GlobalStyles } from './styles/GlobalStyles';
import { NavBar } from './components';
import { Home } from './pages/index';

//----------------------------------------------------------------

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App