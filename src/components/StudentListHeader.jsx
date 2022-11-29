import { CheckBox } from '@mui/icons-material'
import {
    TableCell, TableHead, TableRow, Checkbox, Table, TableContainer, TableSortLabel, Box
} from '@mui/material'
import React from 'react'

const visuallyHidden = {
    border: 0,
    margin: -1,
    padding: 0,
    width: '1px',
    height: '1px',
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    clip: 'rect(0 0 0 0)',
};

const StudentListHeader = () => {

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox">
                            <Checkbox

                            />
                        </TableCell>

                        <TableCell
                            key={1}
                        >
                            <TableSortLabel
                            >
                                #
                            </TableSortLabel>
                        </TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    )
}

export default StudentListHeader