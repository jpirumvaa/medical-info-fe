import React from 'react'
import { useNavigate } from 'react-router-dom'

import { classes } from '../styles/styles'

const CustomNav = () => {

    const history = useNavigate()

    const handleLogout = () => {
        sessionStorage.removeItem("token")
        history("/")
    }
    return (
        <div style={classes.navWrapper}>
            <div>
                <img
                    src={require('../assets/medical.png')}
                    alt="logo"
                    onClick={() => history('/')}
                    style={classes.logo}
                />
            </div>
            <div>
                <img
                    onClick={handleLogout}
                    src="https://icon-library.com/images/profile-icon-white/profile-icon-white-1.jpg"
                    alt="user"
                    style={classes.userAvatar}
                />
            </div>

        </div>
    )
}

export default CustomNav