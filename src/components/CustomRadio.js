import React from 'react'
import { classes } from '../styles/styles'

const CustomRadio = ({ handleChange, name, options }) => {
    return (
        <div style={classes.radioWrapper}>
            <p style={classes.grayFont}>Select {name}</p>
            <div>
                {options.map(option => (
                    <>
                        <input type="radio" id="html" name={name} onClick={() => handleChange(option.value)} value={option.value} />
                        <label for="html">{option.name}</label>
                    </>
                ))}
            </div>

        </div>
    )
}

export default CustomRadio