import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import FormTemplate from '../components/FormTemplate'
import CustomInput from '../components/CustomInput'
import CustomCheckbox from '../components/CustomCheckbox'
import { classes } from '../styles/styles';
import { login } from '../redux/actions/auth';

const Login = () => {

    const history = useNavigate();
    const dispatch = useDispatch();


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChange = (e) => setUsername(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)

    const handleLogin = () => {
        let formData = [];
        const data = {
            username,
            password
        }
        for (var property in data) {
            formData.push(`${property}=${data[property]}`);
        }
        formData = formData.join("&");
        dispatch(login(formData, history))
    }
    const navigateToSignup = () => history('/signup')
    return (
        <div
            className='form-wrapper'
            style={classes.formWrapper}
        >
            <FormTemplate
                formTitle="Welcome back!"
                actionName="Login"
                formAction={handleLogin}
                handleEmailChange={handleUsernameChange}
                handlePasswordChange={handlePasswordChange}
            >
                <CustomInput
                    iconName={"topcoat:email"}
                    inputName={"Username"}
                    handleChange={handleUsernameChange}
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