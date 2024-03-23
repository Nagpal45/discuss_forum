import { ChatBubbleOutline, FavoriteBorderOutlined, ShareOutlined, VisibilityOutlined } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'

export default function DiscussForum() {
    return (
        <div className="forum flex-auto flex items-start justify-start w-2/3 flex-col gap-10">
            <h1 className='mt-5 ml-2 text-4xl font-bold bg-gray-200 p-3  text-red-400'>Discussion Forum</h1>
            {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className="w-11/12 shadow-xl flex border ml-3 rounded-xl">
                    <div className="left w-20 flex items-start justify-center">
                        <Image src='https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg' width={50} height={50} alt='' className='rounded-full mt-2' />
                    </div>
                    <div className="right w-full h-fit p-4 pl-1">
                        <div className="top w-full h-1/3 flex flex-row justify-between mb-2">
                            <div className="name flex flex-row">
                                <p className='font-bold'>Lorem Ipsum</p>
                                <p className='ml-5 text-xs pt-1 pb-1 pl-4 pr-4 text-white rounded-xl bg-blue-900'>Sector 2</p>
                            </div>
                            <p className='text-xs text-blue-700 font-bold'>2 min ago</p>
                        </div>
                        <div className="center w-11/12 h-fit">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi facilis sint voluptas libero necessitatibus dolorem, et sit accusantium, rem tenetur ipsam atque in, minus ut sequi rerum architecto eligendi. Vero?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </div>
                        <div className="bottom w-10/12 flex h-1/3 flex-row mt-2 justify-between">
                            <div className="icon flex flex-row items-center cursor-pointer">
                                <FavoriteBorderOutlined />
                                <p className='ml-3 text-xs font-bold'>2k</p>
                            </div>
                            <div className="icon flex flex-row items-center cursor-pointer">
                                <VisibilityOutlined />
                                <p className='ml-3 text-xs font-bold'>2k</p>
                            </div>
                            <div className="icon flex flex-row items-center cursor-pointer">
                                <ChatBubbleOutline />
                                <p className='ml-3 text-xs font-bold'>2k Comments</p>
                            </div>
                            <div className="icon flex flex-row items-center cursor-pointer">
                                <ShareOutlined />
                                <p className='ml-3 text-xs font-bold'>Share</p>
                            </div>
                        </div>
                    </div>
                </div>))}
        </div>
    )
}
