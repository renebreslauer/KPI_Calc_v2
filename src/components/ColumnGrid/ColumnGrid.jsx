import React from 'react'
import './ColumnGrid.scss'
import { Column, AboutColumn } from '../index'
import { Category, Subcategory} from '../../data'

function ColumnGrid() {


    return (
        <>
        <div className="column_grid_wrapper">
        {Category.map((categoryDef) => {
            if (categoryDef.name === 'Retention') {
        return <AboutColumn about_column_text={categoryDef.meaning} />
            }
        })}

        {Subcategory.map((subcatData) => {
            if (subcatData.category === 'retention') {
        return <Column 
        header={subcatData.name}
        body={subcatData.definition}
        indicator={subcatData.indicator}
        benchmark={subcatData.benchmark}
        moreInfo={subcatData.moreInfo} />
            }
        })}
        </div>

        </>
    )
}


export default ColumnGrid

