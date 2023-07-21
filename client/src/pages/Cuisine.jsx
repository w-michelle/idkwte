import {motion} from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Cuisine() {

    const [cuisine, setCuisine] = useState([])
    const [restaurantCity, setRestaurantCity] = useState('')

    let params = useParams()
    const getCuisine = async(name, city) => {
        try{
            const data = await fetch(`/api/${city}?category=${name}`)
            const restaurants = await data.json()
            setCuisine(restaurants.businesses)
   
        }catch(error){
            console.log(error)
        }
      
    }
    useEffect(()=> {
        const city = localStorage.getItem('restaurantCity')
        setRestaurantCity(city)
      }, [])
    useEffect(()=> {
        if(restaurantCity){
            getCuisine(params.type, restaurantCity)
        }
        
     
    },[params.type, restaurantCity])

  return (
    <motion.div animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration:0.5}} className='grid grid-cols-custom gap-3'>
        {
            cuisine?.map((item) => (
                <div key={item.id}>
                    <Link to={'/restaurant/' + item.id}>
                     <img className="w-full h-[300px] object-cover rounded-lg" src={item.image_url} alt={item.name} />
                     </Link>
                    <h4 className='text-center p-2'>{item.name}</h4>
                </div>
            ))
        }
        
        
    </motion.div>
  )
}

export default Cuisine