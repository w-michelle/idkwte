import {FaQuestion} from 'react-icons/fa';

import { GiChopsticks, GiCookingPot, GiHerbsBundle, GiSushis} from 'react-icons/gi'
import {NavLink} from 'react-router-dom'

function Category() {
  return (
    <div className='flex flex-wrap justify-center gap-3 my-4 mx-0'>
          <NavLink to={'/random'} className="logolink w-20 h-20 p-2">
            <FaQuestion className='text-4xl'/>
            <h4 className='text-xs'>Random</h4>
        </NavLink>
        <NavLink to={'/cuisine/italian'} className="navlink w-20 h-20">
            <GiHerbsBundle className='text-2xl' />
            <h4 className='text-xs text-white'>Italian</h4>
        </NavLink>
        <NavLink to={'/cuisine/korean'} className="navlink w-20 h-20">
        <GiChopsticks className='text-2xl' />
            <h4 className='text-xs text-white'>Korean</h4>
        </NavLink>
        <NavLink to={'/cuisine/french'} className="navlink w-20 h-20">
            <GiCookingPot className='text-2xl' />
            <h4 className='text-xs text-white'>French</h4>
        </NavLink>
        <NavLink to={'/cuisine/japanese'} className="navlink w-20 h-20">
            <GiSushis className='text-2xl' />
            <h4 className='text-xs text-white'>Japanese</h4>
        </NavLink>
    </div>
  )
}

export default Category