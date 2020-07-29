import React from 'react'
import './LowerNav.scss'
import { HashLink as Link } from 'react-router-hash-link'

function LowerNav() {
  return (
    <>
      <div class="lower_nav_container">
        <div class="lower_nav">
          <Link smooth to="/#Retention">
            Retention
          </Link>
          <Link smooth to="/#Growth">
            Growth
          </Link>
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
