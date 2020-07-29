import React from 'react'
import './LowerNav.scss'
import { NavLink } from 'react-router-dom'

function LowerNav() {

    return (
        <>
        <div class="lower_nav_container">
        <div class="lower_nav">
            <a href="#Retention">Retention</a>
            <a href="#Growth">Growth</a>
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