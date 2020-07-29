import React from 'react'
import './AboutColumn.scss'

function AboutColumn(props) {
  return (
    <div className="about_column_wrapper">
      <div className="about_column_text">{props.about_column_text}</div>
    </div>
  )
}

export default AboutColumn
