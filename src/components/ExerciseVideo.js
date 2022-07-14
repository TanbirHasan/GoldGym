import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const ExerciseVideo = ({exerciseVideos,name}) => {
    if(!exerciseVideos.length){
        return 'Loading...'
    }
    return (
      <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
        <Typography variant="h4">
          Watch<span style={{color : '#ff2625'}}> {name}</span> Exercise
        </Typography>
        <Stack justifyContent="space-evenly"  flexWrap="wrap" alignItems="center"
          sx={{flexDirection : {lg :'row'}, gap : {lg:'110px',xs : '0'}}}
        >
            {exerciseVideos?.slice(0,6).map((item,index) => (
                <a
                key={index} className='exercise-videos'
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank"
                rel="noreferrer"
                width="300px"
                >
                    <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
                    <Box>
                        <Typography variant="h5" color="#000">
                            {item.video.title}
                        </Typography>
                    </Box>
                </a>
            ))}
        </Stack>
      </Box>
    );
};

export default ExerciseVideo;