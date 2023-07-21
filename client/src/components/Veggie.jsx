import { useEffect, useState } from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";
function Veggie() {
  const [veggie, setVeggie] = useState([])
  const [restaurantCity, setRestaurantCity] = useState('')

  useEffect(()=> {
    const city = localStorage.getItem('restaurantCity')
    setRestaurantCity(city)
  }, [])

  useEffect(()=> {
    if(restaurantCity) {
      fetchData(restaurantCity)
    }
   
  },[restaurantCity])

const fetchData = async(city) => {

    try{
      const response = await fetch(`https://idwte-api.vercel.app/api/${city}?category=${'vegetarian'}`)
      const data = await response.json();
   
      setVeggie(data.businesses)
     
    } catch(error) {
      console.log(error)
    }
  
  
}


  return (
    <div className="">
      <h3 className="mt-10">Vegetarian</h3>
      <Splide options={{perPage: 4, arrows: true, pagination:false, drag:'free', gap:'1rem', breakpoints: { 600: {perPage: 1}, 900:{perPage: 2}, 1024:{perPage: 3}}} }>
      
        {
            veggie?.map((restaurant) => (
              <SplideSlide key={restaurant.id}>
                <Link to={'/restaurant/' + restaurant.id}>
                <div className="relative min-h-[20rem] p-2 rounded-3xl overflow-hidden flex flex-col items-center" >
                    <p className="bg-textBg absolute z-10 left-[0%] top-[50%] text-white font-semibold text-md height-[40%] flex justify-center items-center w-full text-center">{restaurant.name}</p>
                
                    <img className="absolute left-0 w-full h-full object-cover rounded-sm" src={restaurant.image_url} alt={restaurant.name} />
                 
                   
                </div>
                </Link>
                </SplideSlide>
            ))
        }
     
        </Splide>
    </div>
  )
}

export default Veggie