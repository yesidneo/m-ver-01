import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='div--wrapper'>
    <ul className='ul--container'>
        <li className='ul__element'>
           <NavLink to='/'>Home</NavLink>
        </li>  
        <li className='ul__element'> 
            <NavLink to='/about'>About</NavLink>
        </li>
        <li className='ul__element'>
            <NavLink to='/productspage'>Products Page</NavLink>
        </li>
    </ul>
</div>
  )
}

export default Navbar