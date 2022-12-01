
import { Box, TextField } from '@mui/material'
import React from 'react'

const AddStudent = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <TextField sx={{width: '40ch'}} id="demo-helper-text-misaligned-no-helper" size='medium' label="First name" />
            <TextField sx={{width: '40ch'}} id="demo-helper-text-misaligned-no-helper" size='medium' label="Last name" />
            <TextField sx={{width: '40ch'}} id="demo-helper-text-misaligned-no-helper" size='medium' label="Avatar" />
        </Box>
    )
}

export default AddStudent