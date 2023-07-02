import React, { useState } from 'react';
import {AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
const [nav,setNav] = useState(false);
const handleNavbar = (e)=>{
  setNav(!nav)
}
  return (
    <div className='bg-[#1D1F23]'>
      <div className='flex justify-between items-center max-w-[1240px]  mx-auto px-4 h-24'>
        <div className='flex'>
            <h1 className='text-orange-500 text-6xl font-bold'>GYMSTER</h1>
            <ul className='flex justify-between text-white items-center xs:hidden sm:hidden md:flex'>
                <li className='p-4 uppercase'>Home</li>
                <li className='p-4 uppercase'>About</li>
                <li className='p-4 uppercase'>Classes</li>
                <li className='p-4 uppercase'>Trainers</li>
                <li className='p-4 uppercase'>Pages</li>
                <li className='p-4 uppercase'>Contact</li>
            </ul>
        </div>
        <button className='text-white bg-orange-500 p-4 uppercase rounded w-36 h-12 flex justify-center items-center xs:hidden sm:hidden md:flex'>join us</button>
        <AiOutlineMenu size={50} className='text-orange-500 xl:hidden 2xl:hidden lg:hidden md:hidden sm:block cursor-pointer' onClick={handleNavbar}/>
      </div>
      <div className={!nav ? 'bg-[#1D1F23] hidden ease-in-out duration-300':"block ease-in-out duration-300"}>
            <ul className='text-white sm:flex flex-col md:hidden text-center'>
                <li className='p-4 uppercase border-b-orange-500 border-b-2'>Home</li>
                <li className='p-4 uppercase border-b-orange-500 border-b-2'>About</li>
                <li className='p-4 uppercase border-b-orange-500 border-b-2'>Classes</li>
                <li className='p-4 uppercase border-b-orange-500 border-b-2'>Trainers</li>
                <li className='p-4 uppercase border-b-orange-500 border-b-2'>Pages</li>
                <li className='p-4 uppercase border-b-orange-500 border-b-2'>Contact</li>
            </ul>
        </div>
    </div>
  );
}

export default Navbar;
