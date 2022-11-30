import { Box } from '@mui/material'
import React from 'react'
import Copyright from './Copyright'



const Footer = (props) => {
  return (
    <Box position='absolute' sx={{bottom: 0}} {...props} >
      <Copyright >L-3012</Copyright>
    </Box>
  )
}

export default Footer