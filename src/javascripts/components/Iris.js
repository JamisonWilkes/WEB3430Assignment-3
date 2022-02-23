import React, { useContext, useEffect , useState} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { IrisContext } from './IrisHome'
import setosa from '../../images/setosa.png'
import versicolor from '../../images/versicolor.png'
import virginica from '../../images/virginica.png'
import { Table, TablePagination, TableBody, TableCell, TableHead, TableRow, TableFooter, TableContainer, AccordionSummary, Tab } from '@material-ui/core'

export default function Iris(){
    let {tableData, setTableData} = useContext(IrisContext)
    //const [flowers, setFlowers] = useState()
    let flower = useParams()
    const history = useHistory()
    console.log(flower.flower)

    let flowerList = []
    tableData && 
        tableData.map((item, index) => {
            item.species === flower.flower ? flowerList.push(item) : null
        })
    
    
    console.log(flowerList)

    const getSepalLength = (list) => {
        let avg = 0
        let total = list.length
        flowerList.map(item => {
            avg += item.sepalLength
        })
        return (Math.round(((avg/total) + Number.EPSILON) * 100) / 100)
    }
    const getSepalWidth = (list) => {
        let avg = 0
        let total = list.length
        flowerList.map(item => {
            avg += item.sepalWidth
        })
        return (Math.round(((avg/total) + Number.EPSILON) * 100) / 100)
    }
    const getPetalLength = (list) => {
        let avg = 0
        let total = list.length
        flowerList.map(item => {
            avg += item.petalLength
        })
        return (Math.round(((avg/total) + Number.EPSILON) * 100) / 100)
    }
    const getPetalWidth = (list) => {
        let avg = 0
        let total = list.length
        flowerList.map(item => {
            avg += item.petalWidth
        })
        return (Math.round(((avg/total) + Number.EPSILON) * 100) / 100)
    }
    return(
        <div className='container-fluid'>
            <h2 className='text-center'>The {flower.flower} Iris Flower</h2>
            <br></br>
        {flowerList.length > 0 && flower && 
            <div className='row'>
                <div className="col-1"></div>
                <div className='col'>
                    {flower.flower==='setosa' &&
                        <img src={setosa} />
                    }
                    {flower.flower==='versicolor' &&
                        <img src={versicolor} />
                    }
                    {flower.flower==='virginica' &&
                        <img src={virginica} />
                    }
                </div>
                <div className='col-6'>
                     
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell><b>Name</b></TableCell>
                                    <TableCell><b>Value</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell><b>Count</b></TableCell>
                                    <TableCell>{flowerList.length}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><b>Sepal Length Avg.</b> </TableCell>
                                    <TableCell>{getSepalLength(flowerList)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><b>Sepal Width Avg.</b> </TableCell>
                                    <TableCell>{getSepalWidth(flowerList)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><b>Petal Length Avg.</b> </TableCell>
                                    <TableCell>{getPetalLength(flowerList)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><b>Petal Width Avg.</b> </TableCell>
                                    <TableCell>{getPetalWidth(flowerList)}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    
                    <hr></hr>

                    <button className="btn btn-primary" onClick={(()=> history.push('/iris'))}>Return to the main Iris Dataset Page</button>
                </div>
            </div>        
        }
        </div>
    )
}