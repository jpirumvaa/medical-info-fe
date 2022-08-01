import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { signup } from '../redux/actions/auth'
import { classes } from '../styles/styles'
import FormTemplate from '../components/FormTemplate'
import CustomCheckbox from '../components/CustomCheckbox'
import CustomInput from '../components/CustomInput'
import CustomRadio from '../components/CustomRadio'
import CustomSelect from '../components/CustomSelect'

const Signup = () => {

    const dispatch = useDispatch()
    const history = useNavigate()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [usertype, setUserType] = useState()
    const [sex, setGender] = useState()
    const [username, setUsername] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [age, setAge] = useState()


    const handleEmailChange = e => setEmail(e.target.value)
    const handlePasswordChange = e => setPassword(e.target.value)
    const handleConfirmPassword = e => setConfirmPassword(e.target.value)
    const handleFirstnameChange = e => setFirstname(e.target.value)
    const handleLastnameChange = e => setLastname(e.target.value)
    const handleUserTypeChange = e => setUserType(e.target.value)
    const handleGenderChange = value => setGender(value)
    const handleUsernameChange = e => setUsername(e.target.value)
    const handlePhoneNumberChange = e => setPhoneNumber(e.target.value)
    const handleAgeChange = e => setAge(e.target.value)


    const handleSignup = () => {
        let formData = [];
        const data = {
            username,
            password,
            firstname,
            lastname,
            email,
            age,
            phoneNumber,
            sex,
            usertype
        }
        for (var property in data) {
            formData.push(`${property}=${data[property]}`);
        }
        formData = formData.join("&");
        if (password === confirmPassword) {
            dispatch(signup(formData, history))
        }
        else {
            alert("Passwords do not match")
        }
    }

    const navigateToLogin = () => history('/')

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
                    handleChange={handleFirstnameChange}
                />
                <CustomInput
                    iconName={"mdi:account"}
                    inputName={"Lastname"}
                    handleChange={handleLastnameChange}
                />
                <CustomSelect
                    iconName={"mdi:account"}
                    inputName={"Confirm Password"}
                    handleChange={handleUserTypeChange}
                />
                <CustomInput
                    iconName={"mdi:account"}
                    inputName={"Username"}
                    handleChange={handleUsernameChange}
                />
                <CustomInput
                    iconName={"mdi:account"}
                    inputName={"Age"}
                    handleChange={handleAgeChange}
                />
                <CustomInput
                    iconName={"mdi:account"}
                    inputName={"Phone Number"}
                    handleChange={handlePhoneNumberChange}
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
                <CustomRadio
                    handleChange={handleGenderChange}
                />

                <CustomCheckbox
                    text={"I agree with terms and conditions"}
                />
                <CustomCheckbox
                    text={"I want to receive the newsletter"}
                />

            </FormTemplate>
            <div
                style={classes.signupIntro}
            >
                <p>Registered?
                    <span
                        class='linkbtn'
                        onClick={navigateToLogin}
                        style={classes.signupIntroTxt}>
                        Login
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Signup