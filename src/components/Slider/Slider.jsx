import React, { useEffect } from 'react';
import sliderImage1 from '../../assets/images/carousel-1.jpg'
import sliderImage2 from '../../assets/images/carousel-1.jpg'

const slider = [
  {
    url : sliderImage1,
    headerTxt : "BUILD YOUR BODY STRONG WITH GYMSTER",
    smallHeaderTxt : "BEST GYM CENTER"
  },{
    url : sliderImage2,

  }
]


const Slider = () => {
  useEffect(()=>{
    setInterval(() => {
      
    }, 1000);
  },[])
  return (
    <div className='bg-no-repeat bg-cover'  style={{backgroundImage :`url(${slider[0].url})`}}>
      <div className=' h-screen max-w-[1280px] m-auto flex items-center justify-center text-center text-white'>
          <div className="flex justify-center items-center flex-col gap-4">
          <div className='text-3xl'>BEST GYM CENTER</div>
          <div className=' font-bold text-7xl'>BUILD YOUR BODY STRONG <br /> WITH GYMSTER</div>
          <div className='gap-8 flex justify-around items-center'>
            <button className='w-40 h-14 bg-[#FB5B21] rounded-lg text-lg uppercase'>Join us</button>
            <button className='w-40 h-14 bg-white rounded-lg text-lg text-[#FB5B21] xs:hidden uppercase'>Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
