import { Box } from '@mui/material';
import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../components/Detail';
import ExerciseVideo from '../components/ExerciseVideo';
import SimilarExercises from '../components/SimilarExercises';
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';

const ExerciseDetail = () => {

    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDBUrl = "https://exercisedb.p.rapidapi.com";
            const youtubeSearchUrl =
              "https://youtube-search-and-download.p.rapidapi.com";
              const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`,exerciseOptions);
              setExerciseDetail(exerciseDetailData);


            const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}exercise`,youtubeOptions)
              setExerciseVideos(exerciseVideoData.contents)
        }

        fetchExercisesData()

    }, [id])
    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail}/>
            <ExerciseVideo exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
            <SimilarExercises/>
            
        </Box>
    );
};

export default ExerciseDetail;