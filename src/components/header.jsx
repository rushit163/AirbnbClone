import React from 'react'
import Logo from '../utils/finalLogo.png'
import pool from '../utils/pool.png'
import newPhoto from '../utils/new.png'
import Coffee from '../utils/coffee.png'
import golf from '../utils/golf.png'
import farm from '../utils/farm.png'
import view from '../utils/view.png'
const Header = () => {
  return (
    <div className='sticky top-0 z-[999] bg-white w-full flex flex-col border-b border-slate-300'>
        <div className='sm:hidden flex w-full items-center justify-center'>
            <div className='flex grow items-center  bg-gray-200 mx-4 my-2 px-2 py-3 rounded-full'>
                <div className='pr-3'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
            </svg>
            </div>
            <div className='flex flex-col items-start justify-start ml-2'>
                <div className='font-semibold text-sm'>
                    Map Area
                </div>
                <div className='font-thin text-sm'>
                    Any week . 1 guest
                </div>
            </div>
            </div>
            <div className='px-3 py-3 rounded-full border border-slate-300 mr-2'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
</svg>

            </div>
        </div>
    <div className="xl:flex xl:justify-between hidden items-center content-center border-b-2 pb-3 w-full">
      <div className="pl-7  cursor-pointer"><img src={`${Logo}`} className='h-[50px]'/></div>
      <div className="flex items-center justify-center   mt-3  text-sm  border border-slate-500 rounded-full  xl:ml-28">
        <div className='border-r border-slate-500  px-4 py-1 cursor-pointer'>Map Area</div>
        <div className='border-r border-slate-500  px-4 py-1 cursor-pointer'>Any week</div>
        <div className=' text-slate-400 cursor-pointer flex items-center pl-2 pr-1 py-1'>Add guest 
            <div className=' bg-red-600 rounded-full text-white font-bold p-1 ml-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            </div>
        </div>
        </div>
      <div className=" self-end justify-self-end flex right-0 items-center justify-center content-center gap-2 mt-3  text-sm py-2">
      <div className=' cursor-pointer'>Airbnb your home</div>
        <div className=' cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
        </div>
        <div className=' cursor-pointer flex items-center border-slate-500 border rounded-full px-3 py-2'>
            <div className='mr-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>

</div>
<div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
</div>
        </div>
      </div>
    </div>
    <div className="sm:flex justify-between xl:hidden hidden items-center content-center border-b-2 pb-3 w-full">
        <div className='flex justify-start'>
      <div className="pl-7  cursor-pointer"><img src={`${Logo}`} className='h-[50px]'/></div>
      <div className="flex items-center justify-center   mt-3  text-sm  border border-slate-500 rounded-full ml-11 xl:ml-28">
        <div className='border-r border-slate-500  px-4 py-1 cursor-pointer'>Map Area</div>
        <div className='border-r border-slate-500  px-4 py-1 cursor-pointer'>Any week</div>
        <div className=' text-slate-400 cursor-pointer flex items-center pl-2 pr-1 py-1'>Add guest 
            <div className=' bg-red-600 rounded-full text-white font-bold p-1 ml-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            </div>
        </div>
        </div>
        </div>
      <div className=" self-end justify-self-end flex right-0 items-center justify-center content-center gap-2 mt-3  text-sm py-2">
      <div className=' cursor-pointer'>Airbnb your home</div>
        <div className=' cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
        </div>
        <div className=' cursor-pointer flex items-center border-slate-500 border rounded-full px-3 py-2'>
            <div className='mr-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>

</div>
<div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
</div>
        </div>
      </div>
    </div>
    <div className='sm:flex  justify-between items-center content-center py-4 border-b-2 hidden'>
        <div className='flex xl:max-w-full max-w-[350px] items-center content-center justify-start overflow-x-auto px-5 py-1'>
            <div className='flex flex-col justify-center items-center pr-5 border-r border-slate-500'>
                <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            </div>
            <div className='text-xs'>Your Search</div>
            </div>
            <div className='flex flex-col justify-center items-center px-5 '>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
</svg>

            </div>
            <div className='text-xs'>Rooms</div>
            </div>
            <div className='flex flex-col justify-center items-center px-5 '>
                <div>
                <img src={`${pool}`} className='h-[25px]'/>
            </div>
            <div className='text-xs'>Pools</div>
            </div>
            <div className='flex flex-col justify-center items-center px-5 '>
                <div>
                <img src={`${view}`} className='h-[25px]'/>
            </div>
            <div className='text-xs'>Amazing View</div>
            </div>
            <div className='flex flex-col justify-center items-center px-5 '>
                <div>
                <img src={`${Coffee}`} className='h-[25px]'/>
            </div>
            <div className='text-xs'>Bed and Breakfast</div>
            </div>
            <div className='flex flex-col justify-center items-center px-5 '>
                <div>
                <img src={`${newPhoto}`} className='h-[25px]'/>
            </div>
            <div className='text-xs'>New</div>
            </div>
            <div className='flex flex-col justify-center items-center px-5 '>
                <div>
                <img src={`${golf}`} className='h-[25px]'/>
            </div>
            <div className='text-xs'>Golf</div>
            </div>
            <div className='flex flex-col justify-center items-center px-5 '>
                <div>
                <img src={`${farm}`} className='h-[25px]'/>
            </div>
            <div className='text-xs'>Farms</div>
            </div>
            
        </div>
        <div className='flex items-center justify-center gap-3'>
            <div className='flex items-center justify-center gap-1 border rounded-xl px-2 py-2 border-slate-500'>
                <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg></div>
            <div>Filters</div>
            </div>
            <div className='flex items-center justify-center gap-1 border rounded-xl px-2 py-2 border-slate-500'>
            <div>Display total before taxes</div>
            <label className="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer"/>
  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  
</label>
            
            </div>

        </div>
        
    </div>
    </div>

  )
}

export default Header
