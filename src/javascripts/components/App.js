import React from 'react'
import {Icon} from '@iconify/react'
import IrisHome from './IrisHome'
import { BrowserRouter as Router } from 'react-router-dom'

export default function App(props){
    
    return(
        <>
            <Router>
            <header>
                <div className="container-fluid">
                    <Icon icon="fa:envira" className="container-fluid" style={{ fontSize: '100px', color: 'lightgrey', padding: '15px' }}/>
                    <h1 className="text-center">The IRIS Dataset</h1>
                    <p className='text-center'>The Iris flower data ser or Fisher's Iris data set is a multivariate data set introduced by ther British statistician and biologist Ronald Fisher in his 1936 paper <b>The use of multiple<b/> measurements in taxonomic problems as an example of linear discriminant analysis.</b> It is one of the most commonly used datasets in statistics and machine learning. The data set consists of 50 samples from each of three species of Iris (Iris setosa, Iris virginica and Iris veriscolor). Four features were measured from each sample: the length and the width of the sepals and petals, in centimeters.</p>
                </div>
            </header>
            <main>
                <IrisHome/>
            </main>
            <footer className='container-fluid'>
                <hr></hr>
                <div className='row'>
                    <div className='col-8'>Jamison Wilkes</div>
                    <div className='col-4'>&copy 2022 All rights reserved</div>
                </div>
                <br/>
                <br/>
            </footer>
            </Router>
        </>
    )
}