import React from 'react'
import Sidenav from '../components/Sidenav'
import Navbar from '../components/Navbar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Lists from '../settings/List';
import ButtonClick from '../MockApiComponent/Button';
export default function Settings() {
  return (
    <>
     <Navbar/>
     <Box height={70}/>
     <Box sx={{ display: 'flex' }}>
     <Sidenav/>
     <ButtonClick/>
     
     
   
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    
    <h1>User info</h1>
  
    <Lists/>

      
      </Box>
     </Box>

     
    </>
  );
}
