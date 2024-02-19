import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


interface Props {
    message: string;
    open: boolean;
    handleClose: (event: React.SyntheticEvent | Event, reason?: string) => void;
}

export default function SimpleSnackbar({ message, open, handleClose }: Props) {
    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                OK
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />

            </IconButton>
        </React.Fragment>
    );

    return (
        <div>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={message}
                action={action}
            />
        </div>
    );
}
