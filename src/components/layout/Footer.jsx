import React from 'react'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { CiLinkedin, CiMail } from "react-icons/ci";


const Footer = () => {
  return (
    <div className='w-full bg-[#091747] text-white flex justify-start md:justify-evenly flex-col md:flex-row py-10 md:items-start pl-[20%] md:pl-0'>
      <div className='flex justify-center items-start flex-col'>
        <h2 className='pb-2 mb-5 border-b-2 border-white text-2xl'>SharePal</h2>
        <ul>
          <li className='cursor-pointer hover:text-gray-300 mb-3'>About Us</li>
          <li className='cursor-pointer hover:text-gray-300 mb-3'>Why SharePal?</li>
          <li className='cursor-pointer hover:text-gray-300 mb-3'>Careers</li>
          <li className='cursor-pointer hover:text-gray-300 mb-3'>Blogs</li>
          <li className='cursor-pointer hover:text-gray-300 mb-3'>Sitemaps</li>
        </ul>
      </div>
      <div className='flex justify-center items-start flex-col'>
        <h2 className='pb-2 mb-5 border-b-2 border-white text-2xl'>Information</h2>
        <ul>
          <li className='cursor-pointer hover:text-gray-300 mb-3'>How it works?</li>
          <li className='cursor-pointer hover:text-gray-300 mb-3'>FAQs</li>
          <li className='cursor-pointer hover:text-gray-300 mb-3'>Verification</li>
          <li className='cursor-pointer hover:text-gray-300 mb-3'>Refund Process</li>
          <li className='cursor-pointer hover:text-gray-300 mb-3'>Cancellation Policy</li>
        </ul>
      </div>
      <div className='flex justify-center items-start flex-col'>
        <h2 className='pb-2 mb-5 border-b-2 border-white text-2xl'>Policies</h2>
        <ul>
          <li className='cursor-pointer hover:text-gray-300 mb-3'>Rental Terms & Conditions</li>
          <li className='cursor-pointer hover:text-gray-300 mb-3'>Shipping Policy?</li>
          <li className='cursor-pointer hover:text-gray-300 mb-3'>Damage Policy?</li>
          <li className='cursor-pointer hover:text-gray-300 mb-3'>Terms of Use</li>
          <li className='cursor-pointer hover:text-gray-300 mb-3'>Privacy Policy</li>
        </ul>
      </div>
      <div className='flex justify-center items-start flex-col'>
        <h2 className='pb-2 mb-5 border-b-2 border-white text-2xl'>Need Help?</h2>
        <ul>
          <li className='cursor-pointer hover:text-gray-300 mb-3 flex justify-center items-center gap-2'><FaWhatsapp />+91 9998887766</li>
          <li className='cursor-pointer hover:text-gray-300 mb-3 flex justify-center items-center gap-2'><CiMail />care@sharepal.in</li>
          <li className='cursor-pointer hover:text-gray-300 mb-3 text-4xl flex justify-center items-center gap-3 mt-8'>
            <FaFacebookF />
            <FaInstagram />
            <CiLinkedin />
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Footer