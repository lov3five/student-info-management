import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import StudentTableToolbar from '../components/StudentTableToolbar';
import StudentTableHead from '../components/StudentTableHead';

//Fake data
import STUDENT_LIST from '../_mock/student';
import { Avatar, Button, Checkbox, Container, Paper, Stack, Typography, styled, TableHead } from "@mui/material";
import { Add, Delete, Edit } from "@mui/icons-material";
import { filter } from 'lodash'

import { default as api } from '../api/api';

const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "12px",
    alignItems: "center",
}));


function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });

    if (query) {
        return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return stabilizedThis.map((el) => el[0]);
}
var students
api.get('/users').then(res => {
    students = res.data
})


export default function TableStudent() {

    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("calories");
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [filterName, setFilterName] = React.useState('');

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = STUDENT_LIST.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleFilterByName = (event) => {
        setPage(0);
        setFilterName(event.target.value);
    };


    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - STUDENT_LIST.length) : 0;

    const filteredStudents = stableSort(STUDENT_LIST, getComparator(order, orderBy), filterName);

    const isNotFound = !filteredStudents.length && !!filterName;


    return (
        <Container>
            <Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Firstname</TableCell>
                                <TableCell align="right">Lastname</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Gender</TableCell>
                                <TableCell align="right">Address</TableCell>
                                <TableCell align="right">City</TableCell>

                            </TableRow>

                        </TableHead>
                        <TableBody>
                            {
                                students.map((row) => {
                                    const { firstName, lastName, email, gender, address, city } = row;
                                    return (
                                        <TableRow
                                            key={email}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="right">{firstName}</TableCell>
                                            <TableCell align="right">{lastName}</TableCell>
                                            <TableCell align="right">{email}</TableCell>
                                            <TableCell align="right">{gender}</TableCell>
                                            <TableCell align="right">{address}</TableCell>
                                            <TableCell align="right">{city}</TableCell>
                                        </TableRow>
                                    );
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box sx={{ width: "100%" }} >
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5} mt={2}>
                    <Typography variant="h5" gutterBottom>
                        Students
                    </Typography>
                    <Button variant="contained" startIcon={<Add />}>
                        New Student
                    </Button>
                </Stack>
                <Paper sx={{ width: "100%", mb: 2 }}>
                    <StudentTableToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />
                    <TableContainer sx={{ minWidth: 800 }}  >
                        <Table
                            sx={{ minWidth: 750 }}
                            aria-labelledby="tableTitle"
                            stickyHeader aria-label="sticky table"
                        >
                            <StudentTableHead
                                numSelected={selected.length}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                rowCount={STUDENT_LIST.length}
                            />
                            <TableBody>
                                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.sort(getComparator(order, orderBy)).slice() */}
                                {stableSort(STUDENT_LIST, getComparator(order, orderBy), filterName)
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {
                                        const { id, avatarUrl, name, email } = row;
                                        const isItemSelected = isSelected(id);
                                        const labelId = `enhanced-table-checkbox-${index}`;
                                        return (
                                            <TableRow
                                                hover
                                                role="checkbox"
                                                /*  aria-checked={isItemSelected} */
                                                tabIndex={-1}
                                                key={id}
                                            /* selected={isItemSelected} */
                                            >
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        color="primary"
                                                        onClick={(event) => handleClick(event, id)}
                                                        checked={isItemSelected}
                                                        inputProps={{
                                                            "aria-labelledby": labelId,
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell
                                                    component="th"
                                                    id={labelId}
                                                    scope="row"
                                                    padding="none"
                                                >
                                                    {id}
                                                </TableCell>
                                                <TableCell align="left">
                                                    <Stack direction="row" alignItems="center" spacing={2}>
                                                        <Avatar alt={name} src={avatarUrl} />
                                                    </Stack>
                                                </TableCell>
                                                <TableCell align="left">{name}</TableCell>
                                                <TableCell align="left">{email}</TableCell>
                                                <TableCell>
                                                    <Icons>
                                                        <Button startIcon={<Edit />} color="success">
                                                            Edit
                                                        </Button>

                                                        <Button startIcon={<Delete />} color="error">
                                                            Delete
                                                        </Button>
                                                    </Icons>

                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                {emptyRows > 0 && (
                                    <TableRow
                                    >
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>

                            {isNotFound && (

                                <TableBody>
                                    <TableRow>
                                        <TableCell align="center" colSpan={6} sx={{ py: 3 }}>

                                            <Typography variant="h6" paragraph>
                                                Not found
                                            </Typography>
                                            <Typography variant="body2">
                                                No results found for &nbsp;
                                                <strong>&quot;{filterName}&quot;</strong>.
                                                <br /> Try checking for typos or using complete words.
                                            </Typography>

                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            )}
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={STUDENT_LIST.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </Box>
        </Container >
    );
}
