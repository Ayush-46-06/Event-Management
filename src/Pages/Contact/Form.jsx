import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";

const Form = () => {
  return (
   <div className="max-w-1xl sm:max-w-6xl mx-auto sm:px-6 px-1 mb-20">

    {/* Main card container */}
    <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg border border-gray-200 relative sm:-mt-[100px] -mt-[80px]">

      {/* Left side - contact info */}
      <div className='p-8 bg-[#e1e7f3] rounded-2xl'>
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Get in touch</h3>
        <p className="text-gray-600 mb-8">
          We value every connection. Contact us for support, business inquiries, or feedback — our dedicated team will ensure your needs are met.
        </p>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full flex-shrink-0">
              <FaLocationDot />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Office</h4>
              <p className="text-gray-600">near Renu Sharma Foundation, Pataudi, Gurgaon, Haryana 122503</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full">
              <MdEmail />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Email Us</h4>
              <p className="text-gray-600">official@graphura.in</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full">
              <MdCall />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Call Us</h4>
              <p className="text-gray-600">+91 7378021327</p>
            </div>
          </div>
        </div>

        {/* Social icons */}
        <div className="mt-8 flex space-x-4">
            {/* Facebook */}
            <a
                href="https://www.facebook.com/Graphura.in?rdid=ChlLZKbRZpHi39kB&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19nKAMTopZ%2F#"
                className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-[#FF6F61] transition duration-300"
                target='blank'
            >
                <FaFacebookF />
            </a>

            {/* Twitter */}
            <a
                href="https://x.com/Graphura"
                className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-[#FF6F61] transition duration-300"
                target='blank'
            >
                <FaTwitter />
            </a>

            {/* Instagram */}
            <a
                href="https://www.instagram.com/graphura.in?igsh=MXNqNmtidzljNDJlag%3D%3D"
                className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-[#FF6F61] transition duration-300"
                target='blank'
            >
              <GrInstagram />
            </a>

            {/* LinkedIn */}
            <a
                href="https://www.linkedin.com/company/graphura-india-private-limited/posts/?feedView=all"
                className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-[#FF6F61] transition duration-300"
                target='blank'
            >
                <FaLinkedinIn />
            </a>
        </div>

      </div>

      {/* Right side - contact form */}
      <div className="p-8">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send us a message</h3>

        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
           
          </div>

          {/* <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Company"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div> */}

          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
    
  )
}

export default Form