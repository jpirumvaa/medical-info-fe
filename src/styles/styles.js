import { colors } from './colors'

export const classes = {
    appContainer: {
        backgroundColor: "#F4F4F5",
        height: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: '100%'

    },
    formTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        padding: 10,
    },
    formWrapper: {
        width: '36%',
        backgroundColor: colors.white,
        borderRadius: '5px',
    },
    formButton: {
        backgroundColor: colors.primary,
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        width: '85%',
        marginTop: '20px',
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: '40px',
    },
    centerTxt: {
        textAlign: 'center',
    },
    formTitleWrapper: {
        borderTop: `8px solid ${colors.primary}`,
        textAlign: 'center'
    },
    inputIconWrapper: {
        backgroundColor: 'white',
        width: '11%',
        borderTop: `2px solid ${colors.secondary}`,
        borderBottom: `2px solid ${colors.secondary} `,
        borderLeft: `2px solid ${colors.secondary}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: '5px',
        borderBottomLeftRadius: '5px',

    },
    inputIcon: {
        fontSize: '23px',
    },
    customInput: {
        width: '100%',
        height: '35px',
        border: `2px solid ${colors.secondary}`,
        borderTopRightRadius: '5px',
        borderBottomRightRadius: '5px',
        fontSize: '16px',
        paddingLeft: '10px',
    },
    customInputWrapper: {
        display: 'flex',
        margin: '0 40px 20px 40px',

    },
    customCheckboxWrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: '-20px 40px 5px 40px',
    },
    customCheckbox: {
        width: '15px',
        height: '15px',
        marginRight: '10px',
    },
    signupIntro: {
        width: '100%',
        margin: '-30px 40px 30px 40px',
    },
    signupIntroTxt: {
        color: colors.primary,
        cursor: 'pointer',
        fontWeight: 'bold',
        marginLeft: '5px',
    }
}