import React, { useState } from 'react'

import Card from './card.jsx'
import MissionMap from './missionMap.jsx';


const Dashboard = () => {
    const defaultPosition = [28.7041, 77.1025];
    const [displayHotel,setDisplayHotels] = useState([])
  return (
    
    <div className='sm:flex sm:flex-row flex-col-reverse flex justify-between mb-52 sm:mb-0'>
      <div className='flex flex-col items-start justify-start sm:w-2/3 w-full'>
        <div className='col-span-3 px-3'><span className='font-semibold'>{displayHotel.length}</span> rooms available</div>
        <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-2 items-center justify-between w-full px-3  py-5 gap-4'>
          {displayHotel.map((hotel)=>{
          return(<Card name={hotel.name} price={hotel.price} />)
          })}
        </div>
      </div>
    <div className='sm:sticky top-0 sm:h-[100vh] h-[40vh] sm:w-1/3 w-full block'>
        <MissionMap setDisplayHotels={setDisplayHotels}/>
        </div>

  </div>
   
  )
}

export default Dashboard
