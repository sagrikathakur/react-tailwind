import React, { useState } from 'react'
import assets from '../assets/assets.js'
import ThemeToggleBtn from './ThemeToggleBtn.jsx'
import { motion } from "motion/react"

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <motion.div initial = {{opacity:0 , y: -50}}
      animate = {{opacity:1 , y: 0}}
      transition = {{duration:0.5 , ease: "easeOut"}}

    className="sticky top-0 z-20 flex items-center justify-between px-4 py-4 font-medium backdrop-blur-xl bg-white/50 dark:bg-gray-900/70 sm:px-12 lg:px-24 xl:px-40">
      
      {/* Logo */}
      <img
        src={theme === 'dark' ? assets.logo_dark : assets.logo}
        alt="Logo"
        className="w-32 sm:w-40"
      />

      {/* Navigation Links */}
      < div
        className={`flex gap-5 sm:items-center sm:text-sm text-gray-700 dark:text-white
        max-sm:fixed max-sm:top-0 max-sm:right-0 max-sm:bottom-0
        max-sm:min-h-screen max-sm:flex-col max-sm:bg-primary
        max-sm:pt-20 max-sm:text-white transition-all duration-300 ease-in-out
        ${sidebarOpen ? 'max-sm:w-60 max-sm:pl-10' : 'max-sm:w-0 max-sm:overflow-hidden'}`}
      >
        {/* Close Icon */}
        <img
          src={assets.close_icon}
          alt="Close menu"
          className="absolute top-4 right-4 w-5 cursor-pointer sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />

        <a href="#" onClick={() => setSidebarOpen(false)} className="sm:hover:border-b">
          Home
        </a>
        <a href="#services" onClick={() => setSidebarOpen(false)} className="sm:hover:border-b">
          Services
        </a>
        <a href="#our-work" onClick={() => setSidebarOpen(false)} className="sm:hover:border-b">
          Our Work
        </a>
        <a href="#contact-us" onClick={() => setSidebarOpen(false)} className="sm:hover:border-b">
          Contact Us
        </a>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 sm:gap-4">



        {/* Theme Toggle Button */}
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        {/* Mobile Menu Icon */}
        <img
          src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}
          alt="Open menu"
          className="w-8 cursor-pointer sm:hidden"
          onClick={() => setSidebarOpen(true)}
        />

        {/* CTA Button */}
        <a
          href="#contact-us"
          className="hidden sm:flex items-center gap-2 rounded-full bg-primary px-6 py-2 text-sm text-white transition-transform hover:scale-105"
        >
          Connect
          <img src={assets.arrow_icon} alt="" width={14} />
        </a>
      </div>
    </motion.div>
  )
}

export default Navbar
