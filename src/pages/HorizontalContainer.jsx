import React from 'react'
import { LowerNav } from '../components/index'
import { Home, Retention, Growth } from './index'
import '../App.scss'

function HorizontalContainer() {
    return (
        <>
<div className="vertical_container">
        <Home />
        </div>
      
       <div className="horizontal_container">
       <LowerNav />
        <div className="horizontal-scroll-wrapper squares"> 
      <div>
        <Retention />
</div>
        <div>
        <Growth />
        </div>
        <div>
        <Growth />
        </div>
        </div>
</div>
         </>
   
    )
}

export default HorizontalContainer