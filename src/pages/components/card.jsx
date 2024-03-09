import React from 'react'
import hotelImg from '../../utils/hotel.jpeg'

const Card = ({name,price}) => {
  return (
    <div>
      <div className='flex flex-col items-start justify-center content-center'>
                <img src={`${hotelImg}`} className='rounded-2xl'/>
                <div className='flex justify-between items-center w-full '>
                    <div className='font-semibold'>Room in new Delhi</div>
                </div>
                <div className='font-thin'>{name}</div>
                <div className='font-thin'>A cozy apartment</div>
                <div className='font-thin'>10-15 Mar</div>
                <div className='font-semibold pt-2 '>₹{price} night</div>
            </div>
    </div>
  )
}

export default Card
