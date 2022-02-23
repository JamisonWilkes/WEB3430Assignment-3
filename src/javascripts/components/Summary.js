import React, { useContext, useEffect, useState } from 'react'
import { Table, TablePagination, TableBody, TableCell, TableHead, TableRow, TableFooter, TableContainer, AccordionSummary } from '@material-ui/core'
import setosa from '../../images/setosa.png'
import versicolor from '../../images/versicolor.png'
import virginica from '../../images/virginica.png'
import { useHistory } from 'react-router-dom'
import { IrisContext } from './IrisHome'

export default function Summary(){
    let {tableData, setTableData} = useContext(IrisContext)
    const history = useHistory()

    let setosaFlowers= []
    let versicolorFlowers = []
    let virginicaFlowers = []

    tableData && 
        tableData.map((item, index) => {
            item.species==="setosa" ? setosaFlowers.push(item) : item.species === "versicolor" ? versicolorFlowers.push(item) : virginicaFlowers.push(item)
        })

    return (
        <div className='container-fluid' id="summary">
            <br/>
            <br/>
            <br/>

        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell><img src={setosa} width="100%"/></TableCell>
                        <TableCell><img src={versicolor} width="100%"/></TableCell>
                        <TableCell><img src={virginica} width="100%"/></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell><b>Name</b></TableCell>
                        <TableCell>setosa</TableCell>
                        <TableCell>versicolor</TableCell>
                        <TableCell>virginica</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><b>Count</b></TableCell>
                        <TableCell>{setosaFlowers.length}</TableCell>
                        <TableCell>{versicolorFlowers.length}</TableCell>
                        <TableCell>{virginicaFlowers.length}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><b>Link</b></TableCell>
                        <TableCell><button className='btn btn-primary' onClick={()=> history.push('/iris/setosa')}>See More</button></TableCell>
                        <TableCell><button className='btn btn-primary' onClick={()=> history.push('/iris/versicolor')}>See More</button></TableCell>
                        <TableCell><button className='btn btn-primary' onClick={()=> history.push('/iris/virginica')}>See More</button></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        <br></br>
        <h2 className="text-center">Summary</h2>
    </div>

    )
}