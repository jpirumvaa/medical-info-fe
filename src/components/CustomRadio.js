import React from 'react'

const CustomRadio = ({ handleChange }) => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            margin: '-20px 40px 30px 45px',
            flexDirection: 'column'
        }}>
            <p style={{ color: 'gray' }}>Select gender</p>
            <div>
                <input type="radio" id="html" name="gender" onClick={() => handleChange("male")} value="male" />
                <label for="html">Male</label>
                <input type="radio" id="css" name="gender" onClick={() => handleChange("female")} value="female" />
                <label for="css">Female</label><br></br>
            </div>

        </div>
    )
}

export default CustomRadio