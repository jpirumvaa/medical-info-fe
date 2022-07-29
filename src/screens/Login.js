import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import FormTemplate from '../components/FormTemplate'
import CustomInput from '../components/CustomInput'
import CustomCheckbox from '../components/CustomCheckbox'
import { classes } from '../styles/styles';

const Login = () => {

    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)

    const handleLogin = () => console.log("Hello from the emaila nd password", email, password)
    const navigateToSignup = () => history('/signup')
    return (
        <div
            style={classes.formWrapper}
        >
            <FormTemplate
                formTitle="Welcome back!"
                actionName="Login"
                formAction={handleLogin}
                handleEmailChange={handleEmailChange}
                handlePasswordChange={handlePasswordChange}
            >
                <CustomInput
                    iconName={"topcoat:email"}
                    inputName={"Email"}
                    handleChange={handleEmailChange}
                />
                <CustomInput
                    iconName={"bx:bxs-lock-alt"}
                    inputName={"Password"}
                    handleChange={handlePasswordChange}
                />
                <CustomCheckbox
                    text={"Remember me"}
                />
            </FormTemplate>
            <div
                style={classes.signupIntro}
            >
                <p>New to med?
                    <span
                        class='linkbtn'
                        onClick={navigateToSignup}
                        style={classes.signupIntroTxt}>
                        Create an account
                    </span>
                </p>
            </div>
        </div >

    )
}

export default Login