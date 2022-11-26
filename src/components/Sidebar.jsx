import React from 'react'
import Typography from '@mui/material/Typography'

const Sidebar = () => {
  return (
    <Typography variant="h5" flex={1} bgcolor="green" sx={{ display: { xs: "none", md: "block" } }}>Sidebar</Typography>
  )
}

export default Sidebar