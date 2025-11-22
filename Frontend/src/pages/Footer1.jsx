import React from 'react'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import CopyrightSection from '../components/CopyrightSection'

const Footer = () => {
  return (
    <div className='bg-[#011530] text-white'>
      <div className='py-10 lg:px-40 px-10'>
        <Section1 />
        <div className="border-t border-gray-700"></div>
        <Section2 />
        <div className="border-t border-gray-700"></div>
        <CopyrightSection />
      </div>
    </div>
  )
}

export default Footer