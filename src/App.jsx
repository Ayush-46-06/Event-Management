import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Contact from './Pages/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App