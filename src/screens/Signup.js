import React, { useState } from 'react'
import { classes } from '../styles/styles'
import FormTemplate from '../components/FormTemplate'
import CustomCheckbox from '../components/CustomCheckbox'
import CustomInput from '../components/CustomInput'
import CustomRadio from '../components/CustomRadio'
import CustomSelect from '../components/CustomSelect'

const Signup = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()


    const handleEmailChange = e => setEmail(e.target.value)
    const handleSignup = () => console.log("hello form submit with the following values:", { email, password, confirmPassword })
    const handlePasswordChange = e => setPassword(e.target.value)
    const handleConfirmPassword = e => setConfirmPassword(e.target.value)
    return (
        <div
            style={classes.formWrapper}
        >
            <FormTemplate
                formTitle="Create an account"
                actionName="Register"
                formAction={handleSignup}
                handleEmailChange={handleEmailChange}
                handlePasswordChange={handlePasswordChange}
            >
                <CustomInput
                    iconName={"topcoat:email"}
                    inputName={"Email"}
                    handleChange={handleEmailChange}
                />
                <CustomInput
                    iconName={"mdi:account"}
                    inputName={"Firstname"}
                    handleChange={handleEmailChange}
                />
                <CustomInput
                    iconName={"mdi:account"}
                    inputName={"Lastname"}
                    handleChange={handleEmailChange}
                />
                <CustomSelect
                    iconName={"mdi:account"}
                    inputName={"Confirm Password"}
                    handleChange={handleConfirmPassword}
                />
                <CustomInput
                    iconName={"bx:bxs-lock-alt"}
                    inputName={"Password"}
                    handleChange={handlePasswordChange}
                />
                <CustomInput
                    iconName={"bx:bxs-lock-alt"}
                    inputName={"Confirm Password"}
                    handleChange={handleConfirmPassword}
                />
                <CustomRadio />

                <CustomCheckbox
                    text={"I agree with terms and conditions"}
                />
                <CustomCheckbox
                    text={"I want to receive the newsletter"}
                />

            </FormTemplate>
        </div>
    )
}

export default Signup