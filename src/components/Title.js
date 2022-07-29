import React from 'react'
import { classes } from '../styles/styles'

const Title = ({ text }) => {
    return (
        <h1 style={classes.formTitle}>{text}</h1>
    )
}

export default Title