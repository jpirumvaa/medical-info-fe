import React from 'react'

const Typography = ({ text }) => {
    return (
        <p style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            margin: '0 40px 30px 40px',
        }}>{text}</p>
    )
}

export default Typography