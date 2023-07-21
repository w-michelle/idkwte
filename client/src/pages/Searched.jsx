import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Searched() {
    let params = useParams()
    const [searchedRestaurants, setSearchedRestaurants] = useState([])
    const [restaurantCity, setRestaurantCity] = useState('')
    const fetchData = async(category, city) => {
        try {
            const response = await fetch(`/api/${city}?category=${category}`)
            const data = await response.json()
            setSearchedRestaurants(data.businesses)
        }catch(error) {
            console.log(error)
        }
    }
    useEffect(()=> {
        const city = localStorage.getItem('restaurantCity')
        setRestaurantCity(city)
      }, [])
    useEffect(() => {
        if(restaurantCity){
            fetchData(params.search, restaurantCity)
        }
       
    }, [params.search, restaurantCity])

  return (
    <div className='grid grid-cols-custom gap-3'>
    {
        searchedRestaurants?.map((item) => (
            <div key={item.id}>
                <Link to={'/restaurant/' + item.id}>
                <img className="w-full h-[300px] object-cover rounded-lg" src={item.image_url} alt={item.name} />
                </Link>
              
                <h4 className='text-center p-2'>{item.name}</h4>
            </div>
        ))
    }
    
    
</div>
  )
}

export default Searched