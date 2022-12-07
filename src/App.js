import "./App.css"
import React from 'react'
import SingleMovie from './components/SingleMovie'
import Home from './Home'

import {
  Routes,
  Route
} from 'react-router-dom'


const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='movie/:id' element={<SingleMovie />} />
      </Routes>
    </>
  )
}

export default App