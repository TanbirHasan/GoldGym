import React, { useState } from 'react';
import {Box } from "@mui/material"
import HeroBanner from '../components/HeroBanner';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';


const Home = () => {
    const [box,setBox] = useState();
    const [bodyPart,setBodyPart] = useState('all')
        const [exercises, setExercises] = useState([]);


        console.log(bodyPart)
    
    return (
      <Box style={{width:'100%'}}>
        <HeroBanner />
        <SearchExercises
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          setExercises={setExercises}
        />
        <Exercises
          bodyPart={bodyPart}
          exercises={exercises}
          setExercises={setExercises}
        />
      </Box>
    );
};

export default Home;