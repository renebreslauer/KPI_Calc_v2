import React from 'react'
import './LowerNav.scss'
import { NavHashLink as NavLink } from 'react-router-hash-link'
import { Category } from '../../data'

function LowerNav() {
  return (
    <>
<div className="lower_nav_container">
<div className="lower_nav">

{Category.map((catData) => (
    <>
    <div class="link_container">
         <NavLink
         smooth to={catData.url}
         className="navlink"
         activeClassName="navlink_active"
          >
          {catData.name}   
          </NavLink>
          <div className="bubble"></div>
          </div>
          </>
        ))}
        </div>
        </div>
    </>
  )
}

export default LowerNav
