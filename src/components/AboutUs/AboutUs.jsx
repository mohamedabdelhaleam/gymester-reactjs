import React from 'react';
import heroImage from '../../assets/images/about.jpg'

const AboutUs = () => {
  return (
    <div className='xs:mb-24'>
      <div className="flex justify-between items-center max-w-[1280px] m-auto gap-12 py-24 md:flex-row xs:flex-col sm:flex-col">
        <img src={heroImage} alt="" srcset="" className='h-[600px] w-1/2 xs:w-3/4'/>
        <div className='h-[600px] flex justify-between items-left flex-col xs:px-2'>
            <div className='uppercase text-[#FB5B21] text-lg'>about us</div>
            <div className= 'text-6xl text-[#222429] font-[700]'>WELCOME TO GYMSTER</div>
            <div className='font-[600] text-2xl text-[#686A6F]'>Diam dolor diam ipsum tempor sit. Clita erat ipsum et lorem stet no labore lorem sit clita duo justo magna dolore</div>
            <div className='text-[#686A6F] text-base font-[400]'>Nonumy erat diam duo labore clita. Sit magna ipsum dolor sed ea duo at ut. Tempor sit lorem sit magna ipsum duo. Sit eos dolor ut sea rebum, diam sea rebum lorem kasd ut ipsum dolor est ipsum. Et stet amet justo amet clita erat, ipsum sed at ipsum eirmod labore lorem.</div>
            <div className='bg-[#222429] text-white p-8 flex justify-between flex-col'>
                <div className="flex justify-between items-center text-center my-4 h-10">
                    <div className='w-1/2 bg-[#FB5B21] text-white rounded-[0.250rem] h-full flex justify-center items-center uppercase'>about us</div>
                    <div className='w-1/2 text-[#FB5B21] h-full flex justify-center items-center uppercase text-md font-[400]'>Why Choose us</div>
                </div>
                <div className='text-md font-[400] text-[#BDBDBF]'>Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
