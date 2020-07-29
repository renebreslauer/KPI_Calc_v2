import React from 'react'
import './ColumnGrid.scss'
import { Column, AboutColumn } from '../index'

function ColumnGrid() {
  const header = [
    'Rate of Return',
    'Burn Rate',
    'Churn Rate',
    'Net Promoter Score',
  ]

  return (
    <>
      <div className="column_grid_wrapper">
        <AboutColumn about_column_text="Retention KPI's are all about retaining customers or figuring out why customers are abandoning your funnel." />
        {header.map((data) => (
          <Column
            header={data}
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        ))}
      </div>
    </>
  )
}

export default ColumnGrid
