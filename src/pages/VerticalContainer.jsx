import React from 'react'
import { Home, HorizontalContainer } from './index'

function VerticalContainer() {
    return (
        <div>
            <div className="vertical_container">
            <Home />
            </div>
            <HorizontalContainer />
        </div>
    )
}

export default VerticalContainer