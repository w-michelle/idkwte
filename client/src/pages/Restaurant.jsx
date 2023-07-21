import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {BsTelephone} from 'react-icons/bs'
import {PiMapPinLine} from 'react-icons/pi'
import {HiStar} from 'react-icons/hi'
import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";

function Restaurant() {
    const [details, setDetails]= useState({})
 
    let params = useParams()

    const fetchDetails = async() => {
        try{
            const response = await fetch(`/business?id=${params.id}`)
            const data = await response.json()
            setDetails(data)
    
        }catch(error){
            console.log(error)
        }
      
    }
useEffect(()=> {
    fetchDetails()

}, [params.id])
  return (
    <div className="mt-10 mb-3 w-full ">
       {details && Object.keys(details).length > 0 &&(
        <>
       <div className="text-center mb-10 flex flex-col gap-4" key={details.id}>
            <h2 className="font-bold text-2xl"><a className="hover:text-orange-400" href={details.url}>{details.name}</a></h2>
            <div className="flex justify-center items-center gap-1 text-center mx-auto">
                <HiStar className="text-2xl text-yellow-300"/>
                <p className="text-md font-semibold">{details.rating}</p>
                <p>•</p>
                <p className="text-md">{details.review_count} reviews</p>
            </div>
            <p>{details.price}</p>
        </div>
        <div className="">
        {details.photos && details.photos.length > 0 ?(

       
        <Splide options={{perPage: 3, arrows: true, pagination:false, drag:'free', gap:'0.5rem', breakpoints: { 600: {perPage: 1}, 900:{perPage: 2}, 1024:{perPage: 3}}}}>
      
      {
           details.photos.map((photo, index) => (
            <SplideSlide key={index}>
                <div className="relative min-h-[20rem] p-2 rounded-3xl overflow-hidden flex flex-col items-center" >
                    <img className="absolute left-0 w-full h-full object-cover rounded-xl" src={photo} alt={details.name} />
                    <div className="z-3 absolute w-full h-full"></div>
                   
                </div>
          
              </SplideSlide>
          ))}
              </Splide>
        )
        :
        (
            <p>No photos available</p>
        )}
      
   
  
      </div>
      <div className="mt-10 flex items-start justify-evenly">
          <div className="flex items-center flex-col justify-center">
              <PiMapPinLine className="text-2xl mb-2"/>
              <p>{details.location.address1}</p>
              <p>{details.location.city}</p>
              <p>{details.location.zip_code}</p>
          </div>
          <div className="flex items-center flex-col justify-center">
              <BsTelephone className="text-xl mb-2"/>
              <p>{details.phone}</p>
          </div>
      </div>
      </>
      )}
    </div>
  )
}

export default Restaurant