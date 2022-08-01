import React from 'react'
import { classes } from '../styles/styles'

const TableTemplate = ({ columns, rows }) => {
    return (
        <div
            style={classes.tableTempWrapper}
        >
            {!rows || rows.length === 0 ? (
                <div
                    style={classes.noDataWrapper}
                >
                    <img
                        src='https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?w=2000'
                        alt='No data'
                        style={classes.noDataImg}
                    />
                </div>
            ) : (
                <table>
                    <tr
                        style={classes.tHeader}
                    >
                        {columns.map((column, index) => (
                            <th key={index}>{column.toUpperCase()}</th>
                        ))}
                    </tr>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <td>{row["id"]}</td>
                            <td>{row["2000"]}</td>
                            <td>{row["2001"]}</td>
                            <td>{row["2002"]}</td>
                        </tr>
                    ))}
                </table>
            )}


        </div>
    )
}

export default TableTemplate