import React from 'react';
import {Box, CircularProgress} from "@mui/material";

const Loading = () => {

    const styles = {
        display: 'flex' ,
        justifyContent: 'center' ,
        alignItems: 'center' ,
        height:'58dvh' ,
        padding: '35px 28px'
    }

    return (
        <Box styles={styles}>
            <CircularProgress color="secondary" />
        </Box>
    );
};

export default Loading;