import React from 'react'

const TableTemplate = ({ columns, rows }) => {
    return (
        <div style={{
            width: '90%',
            margin: '30px 3% 30px 5%',

        }}>
            <table>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>{column}</th>
                    ))}
                </tr>
                {rows.map((row, index) => (
                    <tr key={index}>
                        <td>{row["2000"]}</td>
                        <td>{row["2001"]}</td>
                        <td>{row["2002"]}</td>
                    </tr>
                ))}
            </table>

        </div>
    )
}

export default TableTemplate