import React from 'react'
import { Link } from 'react-router-dom';

const CopyrightSection = () => {
  return (
    <div className='mt-3 flex justify-between'>
        <h4>Copyright &copy; 2025 Graphura, All rights reserved</h4>

        <ul className='flex gap-5 text-gray-400'>
            <li className='hover:text-white cursor-pointer'>
                <Link to='/contact'>Term of use</Link>
            </li>
            <li className='hover:text-white cursor-pointer'>
                <Link to=''>Privacy Policy</Link>
            </li>
            <li className='hover:text-white cursor-pointer'>
                <Link to=''>Cookie Policy</Link>
            </li>
        </ul>
    </div>
  )
}

export default CopyrightSection