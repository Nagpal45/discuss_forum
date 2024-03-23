import Image from 'next/image'
import React from 'react'

export default function MarketStories() {
  return (
    <div className="stories flex-col flex-auto flex items-start justify-start w-1/6 gap-8">
    <h1 className='mt-5 text-2xl font-bold bg-gray-200 p-3 text-red-400'>Market Stories</h1>
    {[1,2,3,4].map((index)=>(<div key={index} className="w-11/12 h-fit shadow-md flex shrink flex-col overflow-hidden">
      <Image src='https://img.freepik.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg' alt='' width={400} height={1} className='flex-auto h-40' />
      <div className="storyText p-3 ">
        <h5 className='font-bold'>The coldest sunset</h5>
        <p className='text-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa nisi at iure, aliquid et iste veniam illum porro natus neque? Tenetur, ullam! Suscipit repudiandae quos nostrum iure! Quidem, perferendis quisquam.</p>
      </div>
    </div>))}
  </div>
  )
}
