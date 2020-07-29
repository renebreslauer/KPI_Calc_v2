import React from 'react'
import './LowerNav.scss'
import { NavHashLink as NavLink } from 'react-router-hash-link'

function LowerNav() {
  return (
    <>
      <div class="lower_nav_container">
        <div class="lower_nav">
          <div class="link_container">
            <NavLink
              smooth
              to="/#Retention"
              className="navlink"
              activeClassName="navlink_active"
            >
              Retention
            </NavLink>
            <div className="bubble"></div>
          </div>
          <div class="link_container">
            <NavLink
              smooth
              to="/#Growth"
              className="navlink"
              activeClassName="navlink_active"
            >
              Growth
            </NavLink>
            <div className="bubble"></div>
          </div>
          <div class="link_container">
            <a href="#">SEO</a>
            <div className="bubble"></div>
          </div>
          <div class="link_container">
            <a href="#">Ads</a>
            <div className="bubble"></div>
          </div>
          <div class="link_container">
            <a href="#">Social</a>
            <div className="bubble"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LowerNav
