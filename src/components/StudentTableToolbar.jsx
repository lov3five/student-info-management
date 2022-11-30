import { Delete, FilterList, Search } from "@mui/icons-material";
import { alpha, IconButton, InputAdornment, OutlinedInput, Toolbar, Tooltip, Typography } from "@mui/material";
import { PropTypes } from 'prop-types';


function StudentTableToolbar(props) {
    const { numSelected, filterName, onFilterName } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(
                            theme.palette.primary.main,
                            theme.palette.action.activatedOpacity
                        ),
                }),
                height: 96,
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: "1 1 100%" }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <OutlinedInput
                    sx={{ width: '30ch' }}
                    value={filterName}
                    onChange={onFilterName}
                    placeholder="Search user..."
                    startAdornment={
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    }
                />
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <Delete />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list" >
                    <IconButton>
                        <FilterList />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
}

StudentTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

export default StudentTableToolbar