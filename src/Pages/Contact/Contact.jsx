import React from 'react';
import banner from '../../assets/contactbanner.jpg'
import Form from './Form';
import Map from './Map';

const Contact = () => {
  return (
    <section className="w-full">
      <div className="relative w-full h-[65vh] overflow-hidden">
        <img
          src={banner}
          alt="Contact banner"
          className="w-full h-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Centered text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="max-w-2xl text-lg leading-relaxed">
            We're here to help you plan your perfect event.  
            Reach out to our friendly support team anytime.
          </p>
        </div>
      </div>

      <div className='w-full bg-gray-50 mb-16'>
        <Form />
        <Map />
      </div>
    </section>
  );
}

export default Contact;
