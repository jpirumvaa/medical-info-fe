import React from 'react'
import Title from './Title'
import { classes } from '../styles/styles'

const FormTemplate = ({ formTitle, actionName, formAction, children }) => {
    return (
        <div style={classes.formTitleWrapper}>
            <Title text={formTitle} />
            {children}
            <button
                style={classes.formButton}
                onClick={formAction}
            >
                {actionName}
            </button>
        </div>
    )
}

export default FormTemplate