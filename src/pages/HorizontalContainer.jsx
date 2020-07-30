import React from 'react'
import { LowerNav } from '../components/index'
import { Home, Retention, Growth, Seo, Ads, Social } from './index'
import '../App.scss'

function HorizontalContainer() {
  return (
    <>
      <div className="vertical_container">
        <Home />
      </div>
      <LowerNav />
      <div className="outer-wrapper">
        <div className="wrapper">
          <Retention />
          <Growth />
          <Ads />
          <Seo />
          <Social />
        </div>
      </div>
    </>
  )
}

export default HorizontalContainer
