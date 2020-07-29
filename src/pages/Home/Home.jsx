import React from 'react'
import './Home.scss'
import Logo from '../../assets/kpi_calculator_logo.svg'
import { HashLink as Link } from 'react-router-hash-link'

function Home() {
  return (
    <>
      <div className="home_container">
        <div className="home_hero">
          <img src={Logo} alt="logo" className="kpi_logo" />
          <h2>
            See what your key performance indicators reveal about your website's
            performance.
          </h2>
          <Link smooth to="/#Retention">
            Scroll Down
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
