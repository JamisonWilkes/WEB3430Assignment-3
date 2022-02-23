import React, { useContext, useEffect, useState } from 'react'
import { Table, TablePagination, TableBody, TableCell, TableHead, TableRow, TableFooter, TableContainer } from '@material-ui/core'
import setosa from '../../images/setosa.png'
import versicolor from '../../images/versicolor.png'
import virginica from '../../images/virginica.png'
import { IrisContext } from './IrisHome'

export default function TableData(){
    let {tableData, setTableData} = useContext(IrisContext)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [page, setPage] = useState(0)
 
     const handleChangePage = (e) => {
         setPage(e)
     }
 
    return (
            <div className='container-fluid'>
                <h2 className="text-center">The whole dataset - 150 data examples</h2>
                <p className="text-center">(page {page+1} of 15)</p>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><b>#</b></TableCell>
                                <TableCell><b>Sepal Length</b></TableCell>
                                <TableCell><b>Sepal Width</b></TableCell>
                                <TableCell><b>Petal Length</b></TableCell>
                                <TableCell><b>Petal Width</b></TableCell>
                                <TableCell><b>Type</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData &&
                                tableData.map((item, index) => {
                                    if(Math.floor(index / 10) == page)
                                        return (
                                            <TableRow key={index}>
                                                <TableCell>{index+1}</TableCell>
                                                <TableCell>{item.sepalLength}</TableCell>
                                                <TableCell>{item.sepalWidth}</TableCell>
                                                <TableCell>{item.petalLength}</TableCell>
                                                <TableCell>{item.petalWidth}</TableCell>
                                                <TableCell>{item.species}</TableCell>
                                            </TableRow>
                                        )    
                                })}
                        </TableBody>
                        </Table>
                    </TableContainer>
                    <br />
                    <br />
                    {tableData &&         
                        <nav className="d-flex justify-content-center">
                            <ul className="pagination">
                            {
                            Array.from(Array(Math.ceil(tableData.length / 10)).keys()).map(p => {
                                return (
                                <li key={p} className={p == page ? "page-item active" : "page-item"}>
                                            <a className="page-link" onClick={(e) => handleChangePage(p)}>{p + 1}</a>                                    </li>
                                        )
                                }) 
                                }
                            </ul>
                        </nav>
                    }
            </div>
    )
}