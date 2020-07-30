import React from 'react'
import './ColumnGrid.scss'
import { Column, AboutColumn } from '../index'
import { Category, Retention, retentionDef } from '../../data'

class ColumnGrid extends React.Component{

render() {



    return (
        <>
        
        <div className="column_grid_wrapper">
        {retentionDef.map((retentionDefinition,index) => (
        <AboutColumn key={index} about_column_text={retentionDefinition.meaning} />
        ))}
      
        {Retention.map((retentionData) => (
        <Column header={retentionData.name}
        body={retentionData.definition}
        indicator={retentionData.indicator}
        benchmark={retentionData.benchmark}
        moreInfo={retentionData.moreInfo} />
        ))}
        </div>

        </>
    )
}
}

//     <>
//       <div className="column_grid_wrapper">
//         <AboutColumn about_column_text="Retention KPI's are all about retaining customers or figuring out why customers are abandoning your funnel." />
//         {retention.map((retentionData) => (
//           <Column
//             header={retentionData.header}
//             body={retentionData.definition}
//             indicator={retentionData.indicator}
//             benchmark={retentionData.benchmark}
//             moreInfo={retentionData.moreInfo}
//           />
//         ))}
//       </div>
//     </>
//   )
// }

export default ColumnGrid
