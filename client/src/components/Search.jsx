import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
function Search() {
    const [input, setInput] = useState('')
    const navigate = useNavigate()
    const submit = (e) => {
        e.preventDefault()
        navigate('/searched/' + input)
        setInput('')
    }

  return (
    <form className="relative w-full sm:w-1/3 my-10" onSubmit={submit}>
         <FaSearch className="absolute top-[30%] left-4  text-gray-800"/>
        <input onChange={(e)=> setInput(e.target.value)} placeholder="enter a cuisine..." value={input} className="border-2 border-gray-800 w-full text-lg text-gray-800 py-2 px-10 rounded-md outline-none" type="text" />
      
    </form>
  )
}

export default Search