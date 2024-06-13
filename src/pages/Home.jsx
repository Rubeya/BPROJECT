import React from 'react'
import Sidenav from '../components/Sidenav'
import Navbar from '../components/Navbar'
import AccordionDash from '../components/AccordianDash';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import "../Dash.css"
import EvStationIcon from '@mui/icons-material/EvStation';
// import { PieChart } from '@mui/x-charts/PieChart';
// import { useDrawingArea } from '@mui/x-charts/hooks';
// import { styled } from '@mui/material/styles';
import Barchart from '../Charts/Barchart';
export default function Home() {
  return (
    <>
  
    <Navbar/>
    <Box height={70}/>
     <Box sx={{ display: 'flex'}}>
     <Sidenav/>
   

    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <Grid container spacing={2}>
        <Grid item xs={8}>
        <Stack spacing={2}  direction="row">
        <Card sx={{ minWidth: 49 + "%", height:140 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          WELCOME
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ minWidth: 49 + "%", height:140 }}>
      <CardContent>
        <div>
        <EvStationIcon/>
        <div className='paddingall'>
        <span className="portname">Port</span>
        <br/>
        <span className="totalport">31767</span>
        </div>
        </div>
        <Typography gutterBottom variant="h5" component="div">
          
        </Typography>
      </CardContent>
      </Card>
      {/* <Card sx={{ maxWidth: 49 + "%", height:140 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      </Card> */}
      </Stack>
    </Grid>
        <Grid item xs={4}>
        <Stack spacing={2} ></Stack>
        <Card sx={{ maxWidth: 345}}>
      <CardContent>
      <Stack spacing={2} direction="row">
        <div className="MyLocationIconstle">
        <MyLocationIcon/>
        </div>
        <div className='paddingall'>
        <span className="locationname">Location</span>
        <br/>
        <span className="lacationno">11606</span>
        </div>
        </Stack>
        
      </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345}}>
      <CardContent>
      <Stack spacing={2} direction="row">
        <div className="MyLocationIconstle">
        <MyLocationIcon/>
        </div>
        <div className='paddingall'>
        <span className="stationname">Station</span>
        <br/>
        <span className="stationno">30176</span>
        </div>
        </Stack>
        
        </CardContent>
      </Card>
    
        </Grid>
        </Grid>
       <Box height={20}/>
        <Grid container spacing={2}>
        <Grid item xs={8}>
        <Card sx={{ height:60+ "vh"}}>
      <CardContent>
      <Barchart/>
      </CardContent>
      </Card>
        </Grid>
        <Grid item xs={4}>
        <Card sx={{ height:60+ "vh"}}>
      <CardContent>
      <div className='paddingall'>
        <span className="stationname">Details</span>

        </div>
      <AccordionDash/>
      </CardContent>
      </Card>
        </Grid>
        </Grid>
      </Box>
     </Box>

  
    </>
  );
}
