import React,{useEffect,useState} from 'react';
import {Box,Stack,TextField,Typography} from '@mui/material'


const SearchExercises = () => {


    return (
        <Stack alignItems="center" mt='37px' justifyContent="center" p="20px">
            <Typography fontWeight="600" fontSize='44px' xs={{fontSize:{lg:'44px',xs:'30px'}}} mb="50px" textAlign="center">
                Awsome Exercises You<br/> Know
            </Typography>
            
        </Stack>
    );
};

export default SearchExercises;