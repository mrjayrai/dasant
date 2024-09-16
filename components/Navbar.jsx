import React, { useEffect, useState } from 'react'
import studiologo from '../src/assets/studiologo.png'
import { Link } from 'react-scroll';

import { FaXmark,FaBars} from "react-icons/fa6";

export default function Navbar() {
  const [isSticky, setisSticky] = useState(false);
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setisSticky(true);
      } else {
        setisSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Services", path: "service" },
    { link: "Our Work", path: "work" },
    { link: "About Us", path: "about" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <>
      <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 z-[10000]'>
      <nav className={`py-1 lg:px-1 px-1 ${isSticky ? "sticky top-0 left-0 right-0 border-b-[1px] shadow border-b-slate-500 bg-white duration-75" : ""}`}>
        <div className='flex justify-between items-center text-base gap-[2px] mr-10'>
            <a href='/' className='flex'><img src={studiologo} style={{ height: '60px', width: '60px',margin:'2px' }} alt=''/></a>
            <ul className=' md:flex space-x-12 hidden'>
        {navItems.map(({ link, path }) => (
            <li key={path} className='cursor-pointer'>
                <Link to={path} spy={true} smooth={true} key={path} offset={-100} className='block text-lg text-gray900 hover:text-indigo-700 first:font-medium'>{link}</Link>
            </li>
        ))}
    </ul>
    <div className='md:hidden'>
      <button 
      onClick={toggleMenu}
      className='focus:outline-none focus:text-gray-500'>
        {
          isMenuOpen ? (<FaXmark className='h-6 w-6 text-neutralDGrey'/>):(<FaBars className='h-6 w-6 text-neutralDGrey'/>)
        }
      </button>
    </div>
    <div className={`space-y-4 px-4 mt-32 py-14 bg-brandPrimary ${isMenuOpen? "block fixed top-0 right-0 left-0":"hidden"}`}>
    {navItems.map(({ link, path }) => (
                <Link to={path} spy={true} smooth={true} key={path} offset={-100} className='block text-base text-white hover:text-white first:font-medium'>{link}</Link>
           
        ))}
    </div>
        </div>
      </nav>
    </header>
    </>
  )
}