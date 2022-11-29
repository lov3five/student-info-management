import React, { useState } from 'react'
import { Box, Button, Card, Container, Stack, Typography, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Add, Dashboard, Home, People } from '@mui/icons-material';
import StudentListHeader from './StudentListHeader';

/* const TABLE_HEADER = [
  { id: 'id', label: '#', alignRight: false },
  { id: 'avatar', label: 'Avatar', alignRight: false },
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'email', label: 'Email', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: '' },
]; */

const Monitor = () => {
  const [value, setValue] = useState(0);
  return (

    <Box sx={{ flex: { xs: 5, sm: 3, md: 4, lg: 6, xl: 6 }, borderLeft: "1px dashed gray" }} >
      <Container >
        {/* Students ... Add Student */}
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5} mt={2}>
          <Box bgcolor={'skyblue'} sx={{ p: "0 5px", borderRadius: "10px" }}>
            <Typography variant="h6" gutterBottom >
              Students
            </Typography>
          </Box>
          <Button variant="contained" startIcon={<Add />} alignItems="center" color="success">
            New Student
          </Button>
        </Stack>

        {/* Table List student */}
        <Card>
          {/* <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} /> */}
          <Box overflow={'scroll'}>
            <StudentListHeader />
          </Box>

        </Card>

      </Container>
    </ Box>
  )
}

export default Monitor