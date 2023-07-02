import React from 'react'

const WorkingCard = ({Time , Program , Name}) => {
  return (
    <div className='py-12 px-4 text-center rounded bg-[#222429] w-[420px] xs:w-80'>
      <div className='uppercase text-base text-[#F4F5F8] mb-1 font-medium'>{Time}</div>
      <div className='uppercase text-xl font-medium mb-1 text-[#FB5B21]'>{Program}</div>
      <div className='uppercase text-base font-medium text-[#BDBDBF]'>{Name}</div>
    </div>
  )
}

export default WorkingCard
