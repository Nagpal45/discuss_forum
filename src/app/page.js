"use client"
import DiscussForum from '@/components/forum';
import Sidebar from '@/components/sidebar';
import MarketStories from '@/components/stories';
import React, { useState } from 'react';

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="home w-full flex items-start justify-end">
      {showSidebar && (<Sidebar/>)}
      <button
        className={showSidebar ? 'h-[100px] w-[16px] bg-blue-950 fixed bottom-1/2 left-1/4': 'h-[100px] w-[16px] bg-blue-950 fixed bottom-1/2 left-0'}
        onClick={toggleSidebar}
      >
        {showSidebar ? (<span
          className="absolute top-1/2 right-1/4 transform -translate-x-1/2 -translate-y-1/2"
          style={{ width: '0.5vw', height: '1vw', backgroundColor: 'white', clipPath: 'polygon(100% 0%, 0% 50%, 100% 100%)' }}
        ></span>) : (<span
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ width: '0.5vw', height: '1vw', backgroundColor: 'white', clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)' }}
        ></span>)}
      </button>
      <div className={showSidebar ? "w-3/4 flex items-start justify-end pl-3" : 'w-full flex items-start justify-center pl-3'}>
        <DiscussForum/>
        <MarketStories/>
      </div>
    </div>
  );
}
