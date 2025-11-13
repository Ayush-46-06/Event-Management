import React from 'react'
import Events from './Events'
import { Route, Router, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/cultural' element={<Events />} />          
        </Routes>
    </div>
  )
}

export default App