import React from 'react'
import { Button, Card, Container, Stack, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';

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
    <Container sx={{ flex: { xs: 5, sm: 3, md: 4, lg: 7, xl: 7 } }}>
      {/* Students ... Add Student */}
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5} mt={2}>
        <Typography variant="h6" gutterBottom>
          Students
        </Typography>
        <Button variant="contained" startIcon={<Add />} alignItems="center" color="success">
          New Student
        </Button>
      </Stack>

      {/* Table List student */}
      <Card>
        
      </Card>

    </Container>
  )
}

export default Monitor