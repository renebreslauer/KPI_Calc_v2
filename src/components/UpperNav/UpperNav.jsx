import React from 'react'
import './UpperNav.scss'
import { NavLink } from 'react-router-dom'

function UpperNav() {

    return (
        <>
        <div class="upper_nav">
           
      
            <NavLink to="#" className="upper_nav_link">Learn More</NavLink>
            <NavLink to="#" className="upper_nav_link">About</NavLink>
            <NavLink to="#" className="upper_nav_link">Contact</NavLink>
        </div>
      
    
        </>
    )
}

export default UpperNav