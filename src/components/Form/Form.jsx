import React from 'react'
import './Form.scss'
import {SubmitButton, ClearButton, Input } from '../Snippets/index'

function Form() {

    return (
        <>
        <form className="form">
        <div className="form_input_group">
        <Input placeholder="Total Visitors" />
        <Input placeholder="Return Visitors" /></div>
        <SubmitButton />
        <ClearButton />
        </form>
        </>
    )
}

export default Form