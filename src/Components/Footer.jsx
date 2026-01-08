import React from 'react'
import assets from '../assets/assets'

const Footer = ({theme}) => {
  return (
    <div className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg-px-24 xl:px-40'>
{/* footer top */}
<div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>



  <div className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
    <img src={ theme === 'dark' ? assets.logo_dark :assets.logo} alt="logo" className='w-32 sm:w-44'/>



    <p className='max-w-md'>Your trusted partner in digital transformation from strategy to execution, we crafted digital solutions that empower businesses and drive growth.</p>


    <ul className='flex gap-8'>
      <li><a href="#hero" className='hover:text-primary'></a>Home</li>
            <li><a href="#services" className='hover:text-primary'></a>Service</li>
      <li><a href="#our-work" className='hover:text-primary'></a>Our Work</li>
      <li><a href="#contact-us" className='hover:text-primary'></a>Contact Us</li>

    </ul>



  </div>







  <div className='text-gray-600 dark:text-gray-400'>
    <h3 className='font-semibold'>Subscribe to our newsletter</h3>
    <p className='text-sm mt-2 mb-6'>The latest updates and news delivered straight to your inbox.</p>

<div className='flex gap-2 text-sm'>
  <input type="email"  placeholder='enter your email' className='w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500'/>

  <button className='w-full p-3 text-sm bg-primary text-white rounded'>Subscribe</button>
</div>
</div>
</div>



<hr className='border-gray-300 dark:border-gray-600 my-6' />

{/* footer bottom */}
<div className=' pb-6 flex justify-center sm:justify-between gap-4 flex-wrap text-center text-sm text-gray-600 dark:text-gray-400'>
  <p>© 2026 sagrika tech corner. All rights reserved.</p>
  <div className='flex items-center justify-between gap-4'>
<img src={assets.facebook_icon} alt="" />
<img src={assets.twitter_icon} alt="" />
<img src={assets.instagram_icon} alt="" />
<img src={assets.linkedin_icon} alt="" />
  </div>
</div>
    </div>
  )
}

export default Footer