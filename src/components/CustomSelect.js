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
                    id="cars"
                    onChange={handleChange}
                    type="text"
                    placeholder={inputName}
                    name={inputName.toLowerCase()}
                    style={classes.customInput}
                >
                    <option value="" style={{ color: 'gray' }}>Choose role</option>
                    <option value="volvo">Admin</option>
                    <option value="saab">Patient</option>
                    <option value="mercedes">Pharmacist</option>
                    <option value="audi">Physician</option>
                </select>
                {/* <input
                    onChange={handleChange}
                    type="text"
                    placeholder={inputName}
                    name={inputName.toLowerCase()}
                    style={classes.customInput}
                /> */}
            </div>

        </div>
    )
}

export default CustomSelect