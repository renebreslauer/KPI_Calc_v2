import React from 'react'
import './Column.scss'
import {Form} from '../index'

function Column(props) {
    return (
        <div className="column_wrapper">
        <div className="column_header">
            <h2>{props.header}</h2>
            <span className="highlight"></span>
            <span className="learn_more">+</span>
        </div>
        <div className="column_body">
        <p>{props.definition}</p>
        <Form /></div>
        
        </div>
    )
}

export default Column