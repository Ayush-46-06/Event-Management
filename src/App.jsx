import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Contact from './Pages/Contact/Contact'
import Footer from './Components/Footer/Footer'
import GalleryDetailsPage from './Pages/GalleryDetailPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path="/gallery/:category" element={<GalleryDetailsPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App