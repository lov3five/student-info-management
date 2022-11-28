import { CheckBox } from '@mui/icons-material'
import { TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

const StudentListHeader = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>
                    <CheckBox />
                </TableCell>
            </TableRow>
        </TableHead>
    )
}

export default StudentListHeader