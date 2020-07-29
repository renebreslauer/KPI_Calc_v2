import React from 'react'
import './LowerNav.scss'
import { NavHashLink as NavLink } from 'react-router-hash-link'

function LowerNav() {
  return (
    <>
      <div class="lower_nav_container">
        <div class="lower_nav">
          <NavLink
            smooth
            to="/#Retention"
            className="navlink"
            activeClassName="navlink_active"
          >
            Retention
          </NavLink>
          <NavLink
            smooth
            to="/#Growth"
            className="navlink"
            activeClassName="navlink_active"
          >
            Growth
          </NavLink>
          <a href="#">SEO</a>
          <a href="#">Ads</a>
          <a href="#">Social</a>
        </div>
        <div class="progress_bar">
          <div class="active_bubble"></div>
          <div class="active_bubble"></div>
          <div class="active_bubble"></div>
          <div class="active_bubble"></div>
          <div class="active_bubble"></div>
        </div>
      </div>
    </>
  )
}

export default LowerNav
