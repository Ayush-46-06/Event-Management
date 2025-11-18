import React from 'react'
import { Link } from 'react-router-dom';

const CopyrightSection = () => {
  return (
    <div className='mt-3 grid justify-center copyright'>
        <h4 className='mb-3 md:text-[16px] text-[14px]'>&copy; 2025 Graphura India Private Limited. All Rights Reserved.</h4>

        <ul className='flex gap-5 text-gray-400 justify-center'>
            <li className='hover:text-white cursor-pointer md:text-[16px] text-[13px]'>
                <Link to=''>Term of Service</Link>
            </li>
            <li className='hover:text-white cursor-pointer md:text-[16px] text-[13px]'>
                <Link to=''>Privacy Policy</Link>
            </li>
            <li className='hover:text-white cursor-pointer md:text-[16px] text-[13px]'>
                <Link to=''>Cookie Policy</Link>
            </li>
        </ul>
    </div>
  )
}

export default CopyrightSection