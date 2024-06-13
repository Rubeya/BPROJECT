import React from 'react'
import Sidenav from '../components/Sidenav'
import Navbar from '../components/Navbar'
import Box from '@mui/material/Box';
import ProductList from './Product/ProductList';


export default function About() {
  return (
    <>
     <Navbar/>
     <Box height={70}/>
     <Box sx={{ display: 'flex' }}>
     <Sidenav/>
     <Box component = "main"  sx={{flexGrow: 1, p: 3}}>
     <ProductList/>
     </Box>
   </Box>
  
  
    </>
  );
}

