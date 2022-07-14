import React from 'react';
import { Link } from 'react-router-dom';
import { Button,Typography,Stack } from '@mui/material';
import { textTransform } from '@mui/system';



const ExerciseCard = ({exercise}) => {
    return (
      <Link className="exercise-id" to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} />
        <Stack direction="row">
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              background: "#ffa9a9",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.bodyPart}
          </Button>
          <Button
            sx={{
              ml: "21px",
              color: "#fff",
              background: "#fcc757",
              fontSize: "14px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {exercise.target}
          </Button>
        </Stack>
        <Typography ml='21px' fontWeight='bold' mt='11px'>
            {exercise.name}
        </Typography>
      </Link>
    );
};

export default ExerciseCard;