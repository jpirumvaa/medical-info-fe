import React from 'react'
import { Icon } from '@iconify/react'
import { classes } from '../styles/styles'

const DownloadBtn = ({ handleDownload }) => {
    return (
        <div style={classes.importbtn}
            onClick={handleDownload}
        >
            <Icon
                icon={'fa-solid:cloud-download-alt'}
            />
            <p
                style={classes.importbtn.importname}
            > &nbsp;Download</p>
        </div>
    )
}

export default DownloadBtn