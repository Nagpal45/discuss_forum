import { Event, Forum, MonetizationOn, Newspaper, Notifications, Person, SentimentNeutral, Store, Summarize, TrendingUp } from '@mui/icons-material'
import React from 'react'

export default function Sidebar() {
  return (
    <div className='sidebar flex-auto flex items-start justify-start w-1/4 bg-blue-950 flex-col fixed left-0 right-0 h-screen'>
        <div className="header flex flex-row items-center w-full h-20 justify-between">
          <Person className='text-white ml-4 border rounded-full text-4xl'/>
          <p className='text-white mr-28 text-lg'>Hello, User</p>
          <Notifications className='text-white text-3xl mr-6'/>
        </div>
        <div className="sepLine border w-full border-gray-400"></div>
        <ul className='w-full flex flex-col pt-4 text-white gap-3 text-lg'>
          <li className='flex flex-row gap-3 p-3 pl-5 w-full items-center cursor-pointer bg-gray-900'><Forum/> Discussion Forum</li>
          <li className='flex flex-row gap-3 p-3 pl-5 w-full items-center cursor-pointer'><MonetizationOn/> Market Stories</li>
          <li className='flex flex-row gap-3 p-3 pl-5 w-full items-center cursor-pointer'> <SentimentNeutral/> Sentiment</li>
          <li className='flex flex-row gap-3 p-3 pl-5 w-full items-center cursor-pointer'><TrendingUp/>Market</li>
          <li className='flex flex-row gap-3 p-3 pl-5 w-full items-center cursor-pointer'><Store/>Sector</li>
          <li className='flex flex-row gap-3 p-3 pl-5 w-full items-center cursor-pointer'><Summarize/>Watchlist</li>
          <li className='flex flex-row gap-3 p-3 pl-5 w-full items-center cursor-pointer'><Event/>Events</li>
          <li className='flex flex-row gap-3 p-3 pl-5 w-full items-center cursor-pointer'><Newspaper/>News/Interview</li>
        </ul>
      </div>
  )
}
