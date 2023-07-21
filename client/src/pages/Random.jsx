import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Random() {

    const [randomRestaurant, setRandomRestaurant] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [restaurantCity, setRestaurantCity] = useState('')

    const fetchData = async(city) => {
        try{
            const response = await fetch(`/random/${city}`)
            const data = await response.json()
            const random = Math.floor(Math.random() *50)
            const restaurant = data.businesses[random]
            setRandomRestaurant(restaurant)
            setIsLoading(false)
        }catch(error){
            console.log(error)
        }
       
    }
    useEffect(()=> {
        const city = localStorage.getItem('restaurantCity')
        setRestaurantCity(city)
      }, [])
      
    useEffect(() => {
        setIsLoading(true)
        if(restaurantCity) {
            fetchData(restaurantCity)
        }
      
    }, [restaurantCity])
  return (
    <div className='flex flex-col items-center mt-12'>
        {
            !isLoading && Object.keys(randomRestaurant).length > 0 ? (
                <div key={randomRestaurant.id}>
                    <Link to={'/restaurant/' + randomRestaurant.id}>
                     <img className="w-[400px] h-[300px] object-cover rounded-lg" src={randomRestaurant.image_url} alt={randomRestaurant.name} />
                     </Link>
                    <h4 className='text-center p-2 font-semibold'>{randomRestaurant.name}</h4>
                </div>
            )
            :
            (
                <div mt-14>Loading...</div>
            )
        }

    </div>
  )
}

export default Random