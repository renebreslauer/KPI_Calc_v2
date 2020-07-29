import React from 'react'
import './Home.scss'
import Logo from '../../assets/kpi_calculator_logo.svg'


function Home() {

    return (
        <>
        <div className="home_container">
        <div className="home_hero">
        <img src={ Logo } alt="logo" className="kpi_logo"/>
        <h2>See what your key performance indicators reveal about your website's performance.</h2>
        <a href="#Retention">Scroll Down</a>
       </div>
       </div>
        </>
    )
}

export default Home