import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import jwt_decode from "jwt-decode";

import CustomNav from '../components/CustomNav'
import DownloadBtn from '../components/DownloadBtn'
import ImportButton from '../components/ImportButton'
import TableTemplate from '../components/TableTemplate'
import { getData, uploadData } from '../redux/actions/data'
import { downloadExcel } from '../utils/export/downloadExcel'
import { importExcel } from '../utils/import/importExcel'
import { classes } from '../styles/styles';

const DataDashboard = () => {

    const authedUser = jwt_decode(sessionStorage.getItem('token'))

    const dispatch = useDispatch()
    const state = useSelector(state => state.data)

    const [tableRows, setTableColomns] = useState()
    const [tableColumns, setTableRows] = useState()
    const [saveUpload, setUpload] = useState("none")
    const [tag, setTag] = useState()


    useEffect(() => {
        dispatch(getData())
    }, [state.data]) // eslint-disable-line react-hooks/exhaustive-deps

    const columns = ["id", "2000", "2001", "2002"]

    const handleUpload = () => {
        dispatch(uploadData(tableRows, tag))
        setTableRows(null)
        setTableColomns(null)
        setUpload("none");
        window.location.reload()
    }
    const handleImport = e => {
        importExcel(e.target.files[0], setUpload, setTableColomns, setTableRows, setTag)
        e.target.value = null;
    }
    const handlecancelUpload = () => {
        setTableRows(null)
        setTableColomns(null)
        setUpload("none");
    }
    const handleDownload = () => downloadExcel(state.data)

    return (
        <div
            style={classes.dataDashboardWrapper}
        >
            <CustomNav />
            <div>
                <h1
                    style={classes.largeTitle}
                >Full Medical Data</h1>
                <hr
                    style={classes.ruler}
                ></hr>
            </div>
            <div style={classes.flexDisplay}>
                {authedUser && authedUser.usertype === "admin" && (
                    <ImportButton
                        handleImport={handleImport}
                        handleUpload={handleUpload}
                        saveUpload={saveUpload}
                        handlecancelUpload={handlecancelUpload}
                    />
                )}
                {state.data && state.data.length > 0 && (
                    <DownloadBtn
                        handleDownload={handleDownload}
                    />
                )}

            </div>

            <TableTemplate
                rows={tableRows ? tableRows : state.data}
                columns={tableColumns ? tableColumns : columns}
            />
        </div>
    )
}

export default DataDashboard