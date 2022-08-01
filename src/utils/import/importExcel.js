import XLSX from 'xlsx'
import { removeSpace } from '../removeSpace'

export const importExcel = (file, setUpload, setTableRows, setTableColomns, setTag) => {
    const EXTENSIONS = ["xlsx", "xls", "csv"]
    const getExtensions = (file) => {
        const name = file.name.split(".")
        if (name) {
            setTag(name[0].split(" ")[0])
        }
        return EXTENSIONS.includes(name[name.length - 1])
    }
    const convertDataToJson = (header, fileData) => {
        let rows = []
        let id = 0;
        fileData.forEach(row => {
            let rowData = {}
            row.forEach((cell, index, arr) => {
                rowData[header[index]] = cell
                rowData.id = index + id
                rowData.newId = index + id
                if (arr.length === index + 1) id++

            })

            rows.push(rowData)
        })
        return rows
    }
    let data = null
    const reader = new FileReader()
    if (file) {
        if (getExtensions(file)) {
            reader.readAsBinaryString(file)
            setUpload("flex");
        } else (
            alert("Invalid file input, Select an Excel or CSV file")
        )

    } else {
        setUpload("none");
        setTableRows(null)
        setTableColomns(null)
    }

    reader.onload = (e) => {
        const binaryData = e.target.result
        const workBook = XLSX.read(binaryData, {
            type: "binary",
            cellText: false,
            cellDates: true
        })
        const workSheetName = workBook.SheetNames[0]
        const workSheet = workBook.Sheets[workSheetName]
        const excelData = XLSX.utils.sheet_to_json(workSheet, {
            header: 1,
            raw: false,
            dateNF: 'yyyy-mm-dd'
        })
        const header = excelData[0].map(head => (removeSpace(head)))
        header.push("newId")
        const headers = header.map(head => head.toUpperCase())
        excelData.splice(0, 1)
        data = headers
        setTableColomns(headers)
        setTableRows(convertDataToJson(header, excelData))
    }
}