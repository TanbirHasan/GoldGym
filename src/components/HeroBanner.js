import React from 'react';
import {Box,Stack,Typography,Button} from "@mui/material"
import HeroBannerImage from "../assets/images/banner.png"

const HeroBanner = () => {
    return (
        <Box sx={{
         
            mt:{lg:'212px',xs:'70px'},
            ml:{sm:'50px'}
        }}  p="20px">
            <Typography color="#FF2625" fontWeight="600" fontSize="26px" mt='30px'>
                Fitness Club
            </Typography>
            <Typography fontWeight='700' sx={{fontSize:{lg:'44px',xs:'40px'}}}>
                Sweat, Smile & Repeat
            </Typography>
            <Typography fontSize='22px' LineHeight="35px" mb='10px'>
                Check out the Most effective exercises
            </Typography>
            
           
            <Button variant="contained" color="error" href="#exercises"  >Explore Exercises</Button>
            <Typography fontWeight="600" color="#ff2625" sx ={{opacity:0.1, display:{lg:'block',xs:'none'}}} fontSize="200px">Exercises</Typography>
             <img src={HeroBannerImage} className="hero-banner-img" alt="banner"/>
        </Box>
    );
};

export default HeroBanner;