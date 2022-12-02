import React from 'react'
import { Box } from '@mui/material';
import TableStudent from '../pages/TableStudent';

/* const TABLE_HEADER = [
  { id: 'id', label: '#', alignRight: false },
  { id: 'avatar', label: 'Avatar', alignRight: false },
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'email', label: 'Email', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: '' },
]; */

const Monitor = () => {
  return (
    <Box sx={{ flex: { xs: 5, sm: 3, md: 4, lg: 6, xl: 6 }, borderLeft: "1px dashed gray" }} >
        <TableStudent/>
    </ Box>
  )
}

export default Monitor