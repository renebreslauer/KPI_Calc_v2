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
      <h3>What is {props.header}?</h3>
        <p>{props.body}</p>
        <h3>What does it indicate?</h3>
        <p>{props.indicator}</p>
        <h3>What is the benchmark?</h3>
        <p>{props.benchmark}</p>
        <h3>More Info</h3>
        <p>{props.moreInfo}</p>
        <Form />
      </div>
    </div>
  )
}

export default Column
