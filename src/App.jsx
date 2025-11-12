import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Contact from './Pages/Contact/Contact'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App