import React from 'react'

const CustomNav = () => {
    return (
        <div style={{
            width: '100%',
            height: 40,
            backgroundColor: "indigo",
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            color: 'white',
            fontSize: '20px',
            fontWeight: 'bold'
        }}>
            <div>
                <img
                    src={require('../assets/medical.png')}
                    alt="logo"
                    style={{ width: '60%', height: '60%', marginLeft: '-60px' }}
                />
            </div>
            <div>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/OOjs_UI_icon_userAvatar.svg/2048px-OOjs_UI_icon_userAvatar.svg.png"
                    alt="user"
                    style={{
                        width: 30,
                        height: 30,
                        borderRadius: '50%',
                        marginRight: 20,
                        cursor: 'pointer'
                    }}
                />
            </div>

        </div>
    )
}

export default CustomNav