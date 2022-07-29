import React from 'react'
import { classes } from '../styles/styles'

const CustomCheckbox = ({ text }) => {
    return (
        <div
            style={classes.customCheckboxWrapper}
        >
            <input
                type="checkbox"
                style={classes.customCheckbox}
            />
            <p>{text}</p>
        </div>
    )
}

export default CustomCheckbox