import React from 'react'
import './Snippets.scss'

function Input(props) {
    return (
        <>
        <input className="form_input" type="text" placeholder={props.placeholder} />
        </>
    )
}

export default Input