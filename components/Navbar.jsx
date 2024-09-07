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
      <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
      <nav className={`py-4 lg:px-5 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>
        <div className='flex justify-between items-center text-base gap-1 mr-10'>
            <a href='' className='flex'><img src={studiologo} style={{ height: '100px', width: '100px',margin:'4px' }} alt=''/></a>
            <ul className=' md:flex space-x-12 hidden'>
        {navItems.map(({ link, path }) => (
            <li key={path} className='cursor-pointer'>
                <Link to={path} spy={true} smooth={true} key={path} offset={-100} className='block text-base text-gray900 hover:text-brandPrimary first:font-medium'>{link}</Link>
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
        </div>
      </nav>
    </header>
    </>
  )
}