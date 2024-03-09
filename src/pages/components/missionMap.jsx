import React,{useState,useMemo, useEffect} from 'react'
import { MapContainer,useMapEvents,Marker,Popup } from 'react-leaflet'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet'
import hotelData from './hotelData'
import { divIcon } from "leaflet";
import hotelImg from '../../utils/hotel.jpeg'
import './customstyles.css'
const MissionMap = ({setDisplayHotels}) => {
  const [innerMap,setInnerMap] = useState([])
  function SetBoundsRectangles() {
    const map = useMap()
    const mapEvent = useMapEvents({
      move: () => {
        setInnerMap([]);
          const hotels = hotelData.map((hotel) => {
              if(map.getBounds().contains(hotel.location)){
                return hotel;
              }
          });
          hotels.map((hotel)=>{
            if(hotel){
              setInnerMap((prev)=>[...prev,hotel])
            }
          })
          setDisplayHotels(innerMap)
      }
  });
    return null
  }
  return (
    <div className='h-full w-full'>
    <MapContainer center={[28.7041, 77.1025]} zoom={10} className='h-[100%]' scrollWheelZoom= {true}>   
    <TileLayer
       attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
       url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
    />
    <SetBoundsRectangles />
    {innerMap.map((hotel)=>{
      const icon = divIcon({
        className: "custom-icon",
        iconSize: [30, 30], // Adjust the size as needed
        html: `<div>${hotel.price}</div>`, // Add 1 to index to start numbering from 1
      });
      return(<Marker position={hotel.location} icon={icon}>
        <Popup>
          <div>
        <div className='flex flex-col items-start justify-center content-center'>
                <img src={`${hotelImg}`} className='rounded-2xl'/>
                <div className='flex justify-between items-center w-full '>
                    <div className='font-semibold'>Room in new Delhi</div>
                </div>
                <div className='font-thin'>{hotel.name}</div>
                <div className='font-thin'>A cozy apartment</div>
                <div className='font-thin'>10-15 Mar</div>
                <div className='font-semibold pt-2 '>₹{hotel.price} night</div>
            </div>
            </div>
        </Popup>
      </Marker>)
    })}
    </MapContainer>
    </div>
  )
}

export default MissionMap
