import React from 'react';
import bodyImage from '../../assets/images/body-svgrepo-com.svg'
import weightImage from '../../assets/images/gym-weights-svgrepo-com.svg'
import armImage from '../../assets/images/arm-dumbbell-svgrepo-com.svg'

const Summer = () => {
  return (
    <div className='bg-[#222429] py-12'>
      <div className="flex justify-evenly items-center flex-col max-w-[1280px] m-auto">
        <div className="flex justify-between items-center w-full gap-2 xs:flex-col">
          <div className="flex justify-evenly items-center xs:p-4 xs:w-3/4 p-12 flex-col bg-[#F4F5F8] w-[32%] h-[400px] rounded-md">
            <img src={bodyImage} alt="" srcset="" className='w-36 h-36'/>
            <div className='text-3xl font-[600]'>BODY BUILDING</div>
            <div>Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd elitr duo vero amet amet stet</div>
            <a href="#body" className='text-[#FB5B21] uppercase decoration-none'>Read more</a>
          </div>
          <div className="flex justify-evenly items-center xs:p-4 xs:w-3/4 p-12 flex-col bg-[#F4F5F8] w-[32%] h-[400px] rounded-md">
            <img src={weightImage} alt="" srcset="" className='w-36 h-36'/>
            <div className='text-3xl font-[600]'>WEIGHT LEFTING</div>
            <div>Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd elitr duo vero amet amet stet</div>
            <a href="#body" className='text-[#FB5B21] uppercase decoration-none'>Read more</a>
          </div>
          <div className="flex justify-evenly items-center xs:p-4 xs:w-3/4 p-12 flex-col bg-[#F4F5F8] w-[32%] h-[400px] rounded-md">
            <img src={armImage} alt="" srcset="" className='w-36 h-36'/>
            <div className='text-3xl font-[600]'>MUSCLE BUILDING</div>
            <div>Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd elitr duo vero amet amet stet</div>
            <a href="#body" className='text-[#FB5B21] uppercase decoration-none'>Read more</a>
          </div>
        </div>
        <div className='text-4xl xs:text-2xl font-[700] text-white my-[2rem]'>30% DISCOUNT FOR THIS SUMMER</div>
        <a href="#become" className='text-white py-4 rounded-[0.250rem] px-12  bg-[#FB5B21] uppercase decoration-none'>Become A Member</a>
      </div>
    </div>
  );
}

export default Summer;
