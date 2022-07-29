import React from 'react'
import { Icon } from '@iconify/react';
import { classes } from '../styles/styles';

const CustomInput = ({ iconName, inputName, handleChange }) => {
    return (
        <div>
            <div
                style={classes.customInputWrapper}
            >
                <div
                    style={classes.inputIconWrapper}
                >
                    <Icon
                        style={classes.inputIcon}
                        icon={iconName}
                    />
                </div>
                <input
                    onChange={handleChange}
                    type="text"
                    placeholder={inputName}
                    name={inputName.toLowerCase()}
                    style={classes.customInput}
                />
            </div>
        </div>
    )
}

export default CustomInput