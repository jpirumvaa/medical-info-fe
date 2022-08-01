import XLSX from "xlsx";
import moment from 'moment'

export const downloadExcel = (allData) => {
    const workSheet = XLSX.utils.json_to_sheet(allData)
    const workBook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workBook, workSheet, "2000-2002 Medical Data")
    XLSX.write(workBook, { bookType: "xlsx", type: "buffer" })
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" })
    XLSX.writeFile(workBook, `Medical data downloaded on: ` + moment().format('YYYY-MM-DDTHHmmss') + '.xlsx')
}
