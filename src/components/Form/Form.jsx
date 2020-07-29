import React from 'react'
import './Form.scss'
import {SubmitButton, Input } from '../Snippets/index'

function Form() {

    return (
        <>
        <form className="form">
        <div className="form_input_group">
        <Input placeholder="Total Visitors" />
        <Input placeholder="Return Visitors" /></div>
        <SubmitButton />
        </form>
        </>
    )
}

export default Form