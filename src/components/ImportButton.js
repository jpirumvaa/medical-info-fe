import React from 'react'
import { classes } from '../styles/styles'
import { Icon } from '@iconify/react'

const ImportButton = ({
    handleImport,
    saveUpload,
    handleUpload,
    handlecancelUpload
}) => {
    return (
        <div>
            <div style={{
                width: 100,
            }}>
                <input
                    id="file"
                    name="upload_data"
                    type="file"
                    onChange={handleImport}
                    hidden={true} />
                <label
                    htmlFor="file"
                >
                    <div
                        style={classes.importbtn}>
                        <Icon
                            icon={'dashicons:database-import'}
                        />
                        <p
                            style={classes.importbtn.importname}
                        >

                            &nbsp; Upload
                        </p>
                    </div>
                </label>
            </div>
            <div
                style={{
                    display: `${saveUpload}`
                }}
            >
                <button
                    onClick={handleUpload}
                    style={classes.smallBtn}
                > Save</button>
                <button
                    onClick={handlecancelUpload}
                    style={classes.smallBtn}
                > Cancel</button>
            </div>
        </div>
    )
}

export default ImportButton