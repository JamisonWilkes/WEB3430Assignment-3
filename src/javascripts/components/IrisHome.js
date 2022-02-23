import React, { createContext, useEffect, useState } from 'react'
import Summary from './Summary'
import TableData from './TableData'
import {Switch, Route, Link, Redirect, useHistory} from 'react-router-dom'
import Iris from './Iris'

export const IrisContext = createContext()

export default function IrisHome(){
    const [tableData, setTableData] = useState()
    const history = useHistory()
    
    useEffect(() => {
        return fetch('/iris.dat')
         .then((response) => response.json())
         .then((data) => setTableData(data))
     }, [])

    return (
        <IrisContext.Provider value={{tableData, setTableData}}>
        <Switch>
            <Route exact path="/iris">
                <div className="row">
                    <div className="col-7">
                        <TableData />
                    </div>
                    <div className="col-5">
                        <Summary />
                    </div>
                </div>
            </Route>
            <Route path="/iris/:flower"><Iris/></Route>
            <Redirect from="" to="/iris" />
        </Switch>
        </IrisContext.Provider>
    )
}