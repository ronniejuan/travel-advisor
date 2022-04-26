import React, {useState, useEffect} from 'react'
import {CssBaseline, Grid} from '@material-ui/core';

import { getPlacesData } from './api';

import Map from './components/Map/Map';
import List from './components/List/List';
import Header from './components/Header/Header';


const App =() =>{
    const [places, setPlaces]=useState([]);

    const [coordinates,setCoordinates] = useState({});
    const [bounds,setBounds] = useState(null);


    useEffect(()=>{
         getPlacesData()
            .then((data)=>{
                console.log(data)
             setPlaces(data)
         })
        
    },[]); // leaving the dependencie array empty, the conde inside the function block will happend only at the start of the app

    return(
        <>
        <CssBaseline />
        <Header />
        <Grid container spacing={3} style={{width:'100%'}}>
            <Grid item xs={12} md={4}>
             <List />
            </Grid>
            <Grid item xs={12} md={8}>
             <Map
             setCoordinates={setCoordinates}
             setBounds={setBounds}
             coordinates={coordinates}
             />

            </Grid>
        </Grid>

        </>
    )
}
export default App;