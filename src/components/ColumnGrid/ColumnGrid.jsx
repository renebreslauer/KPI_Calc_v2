import React from 'react'
import './ColumnGrid.scss'
import { Column } from '../index'

function ColumnGrid() {

    const Header = [
       'Rate of Return',
       'Burn Rate',
       'Churn Rate',
       'Net Promoter Score'
    ]
 
  
    return (
        <>
        <div className="column_grid_wrapper">
        {Header.map((data, index) => (
        
            <Column header={data} />
        ))}
    
        </div>
        </>
    )
}

export default ColumnGrid