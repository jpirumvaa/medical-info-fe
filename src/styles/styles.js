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
    },
    smallBtn: {
        height: '30px',
        marginBottom: '10px',
        marginLeft: '16px',
        outline: 'none',
        border: 'none',
        backgroundColor: '#19459D',
        color: 'white',
        fontSize: '15px',
        fontWeight: 'bold',
        borderRadius: '5px',
        cursor: 'pointer',
        padding: '0 20px'
    },
    importbtn: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        textTransform: "uppercase",
        color: '#19459D',
        cursor: 'pointer',
        importname: {
            font: "13px Roboto,Helvatica,Arail,sans-serif",
        },
    },
    navWrapper: {
        width: '100%',
        height: 40,
        backgroundColor: "#19459D",
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        color: 'white',
        fontSize: '20px',
        fontWeight: 'bold'
    },
    logo: {
        width: '60%',
        height: '60%',
        marginLeft: '-60px',
        cursor: 'pointer'
    },
    userAvatar: {
        width: 30,
        height: 30,
        borderRadius: '50%',
        marginRight: 20,
        cursor: 'pointer'
    },
    radioWrapper: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        margin: '-20px 40px 30px 45px',
        flexDirection: 'column'
    },
    grayFont: {
        color: colors.lightGray
    },
    tableTempWrapper: {
        width: '95%',
        margin: '30px 10px 30px 2%',

    },
    noDataWrapper: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    noDataImg: {
        width: 'auto',
        height: '70vh',
        marginBottom: '20px'

    },
    tHeader: {
        backgroundColor: '#19459D',
        color: 'white',
        fontWeight: 'boldest',
        fontSize: '17px',
        outline: 'none'
    },
    dataDashboardWrapper: {
        width: '100%',
        alignSelf: 'flex-start',
    },
    largeTitle: {
        fontSize: '27px',
        fontWeight: 'bold',
        marginLeft: '20px'
    },
    ruler: {
        width: '95%',
        marginLeft: '20px',
        marginTop: '10px',
        marginBottom: '10px'
    },
    flexDisplay: {
        display: 'flex',
        alignItems: 'flex-start',
    }
}