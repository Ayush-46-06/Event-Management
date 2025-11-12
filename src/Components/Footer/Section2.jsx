import React from 'react';
import { FaLocationDot } from "react-icons/fa6";

const Section2 = () => {
  return (
    <div className='mt-8 grid xl:grid-cols-2'>
      {/* Left Content */}
      <div className='left grid sm:grid-cols-3 gap-10 mb-10'>
        <div>
            <h4 className='text-xl font-bold mb-3'>Head Offce</h4>
            <p className='text-gray-500 mb-2'>near Renu Sharma Foundation, Pataudi, Gurgaon, Haryana 122503</p>
            <p className='text-gray-500 mb-2'>Gurgaon</p>

            <div className='flex gap-1 place-items-center'>
                <FaLocationDot />
                Branch Location
            </div>
        </div>
        <div>
            <h4 className='text-xl font-bold mb-3'>Get Started</h4>
            <ul className='text-gray-500'>
                <li><a href="">Startups</a></li>
                <li><a href="">Business Payment</a></li>
                <li><a href="">Growing Businesses</a></li>
                <li><a href="">Enterprise</a></li>
            </ul>
        </div>
        <div>
            <h4 className='text-xl font-bold mb-3'>Support</h4>
            <ul className='text-gray-500'>
                <li><a href="">Help Center</a></li>
                <li><a href="">My Account</a></li>
                <li><a href="">Ticket Support</a></li>
                <li><a href="">Contact us</a></li>
            </ul>
        </div>
        
      </div>

      {/* Right Content */}
      <div className='right xl:px-25 mb-10'>
        <h4 className='text-xl font-bold mb-3'>Subscribe</h4>
        <p className='text-gray-500 mb-2'>Get exclusive deals by signing up to our Portal.</p>
        
        <div className='flex flex-col gap-2'>
            <input type="email" className='border-2 border-gray-400 rounded-md p-2 xl:w-full sm:w-1/2 w-[75%]' placeholder='Enter your email' required/>
            <button className='bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-2 rounded-md xl:w-full sm:w-1/2 w-[75%] cursor-pointer hover:scale-105 transition duration-300 ease-in-out'>Sign Up</button>
        </div>
      </div>

    </div>
  );
}

export default Section2;
