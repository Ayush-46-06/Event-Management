import React from 'react'
import Events from './Events'
import { Route, Routes } from 'react-router-dom'
import CulturalDetails from './CulturalDetails'

const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/cultural' element={<Events />} /> 
          <Route path='/cultural/:id' element={<CulturalDetails />} />         
        </Routes>
    </div>
  )
}

export default App