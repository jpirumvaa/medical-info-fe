import React from 'react'
import { classes } from '../styles/styles'
import { Icon } from '@iconify/react'

const CustomSelect = ({ iconName, handleChange, inputName }) => {
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
                <select
                    id="usertype"
                    onChange={handleChange}
                    type="text"
                    placeholder={inputName}
                    name={inputName.toLowerCase()}
                    style={classes.customInput}
                >
                    <option value="">Choose role</option>
                    <option value="admin">Admin</option>
                    <option value="patient">Patient</option>
                    <option value="pharmacist">Pharmacist</option>
                    <option value="physician">Physician</option>
                </select>
            </div>

        </div>
    )
}

export default CustomSelect