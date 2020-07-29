import React from 'react'
import './Column.scss'
import { Form } from '../index'

function Column(props) {
  return (
    <div className="column_wrapper">
      <div className="column_header">
        <span className="highlight">
          <h2>{props.header}</h2>
        </span>

        <span className="learn_more">+</span>
      </div>
      <div className="column_body">
        <p>{props.body}</p>
        <Form />
      </div>
    </div>
  )
}

export default Column
