import React from 'react'
import WorkingCard from '../WorkingCard/WorkingCard'

const Working = () => {
  return (
    <div className='py-12'>
      <div className="max-w-[1280px] m-auto flex flex-col justify-between items-center">
        <div className='text-[#FB5B21] text-xl font-medium uppercase'>CLASS SCHEDULE</div>
        <div className='text-[4rem] font-bold text-[#222429]'>WORKING HOURS</div>
        <div>
            <ul className='list-none flex justify-around items-center bg-[#222429] rounded-full mx-1 xs:flex-col'>
                <li className='py-2 text-base font-normal px-4 cursor-pointer uppercase text-white bg-[#FB5B21] rounded-full'>Monday</li>
                <li className='py-2 text-base font-normal px-4 cursor-pointer uppercase text-white'>Tuesday</li>
                <li className='py-2 text-base font-normal px-4 cursor-pointer uppercase text-white'>Wednesday</li>
                <li className='py-2 text-base font-normal px-4 cursor-pointer uppercase text-white'>Thursday</li>
                <li className='py-2 text-base font-normal px-4 cursor-pointer uppercase text-white'>Friday</li>
                <li className='py-2 text-base font-normal px-4 cursor-pointer uppercase text-white'>Saturday</li>
                <li className='py-2 text-base font-normal px-4 cursor-pointer uppercase text-white'>Sunday</li>
            </ul>
        </div>
        <div className='flex justify-between items-center w-full mt-12 flex-wrap gap-2 xs:flex-col xl:justify-evenly sm:justify-center'>
            <WorkingCard Time='6.00AM - 8.00AM' Program ='POWER LIFTING' Name = 'JOHN DEO'/>
            <WorkingCard Time='8.00AM - 10.00AM' Program ='BODY BUILDING' Name = 'JAMES TAYLOR'/>
            <WorkingCard Time='10.00AM - 12.00PM' Program ='CARDIO PROGRAM' Name = 'JACK SPARROW'/>
            <WorkingCard Time='12.00AM - 2.00PM' Program ='WEIGHT LOOSE' Name = 'ROBERT SMITH'/>
            <WorkingCard Time='2.00AM - 4.00PM' Program ='FITNESS PROGRAM' Name = 'ADAM PHILLIPS'/>
            <WorkingCard Time='4.00AM - 6.00PM' Program ='CROSSFIT CLASS' Name = 'JAMES ALIEN'/>
            <WorkingCard Time='6.00AM - 8.00PM' Program ='MUSCLE BUILDING' Name = 'PETTER JOHN'/>
            <WorkingCard Time='8.00AM - 10.00PM' Program ='YOGA CLASS' Name = 'JESSY REO'/>
        </div>
      </div>
    </div>
  )
}

export default Working
