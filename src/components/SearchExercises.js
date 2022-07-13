import React,{useEffect,useState} from 'react';
import {Box,Stack,TextField,Typography,Button} from '@mui/material'
import { textTransform } from '@mui/system';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';


const SearchExercises = ({bodyPart,setBodyPart,setExercises}) => {

    const [search,setSearch] = useState('');

    const [bodyParts,setBodyParts] = useState([])

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData(
              "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",exerciseOptions
            );
            setBodyParts(['all',...bodyPartsData])
        }

        fetchExercisesData();
    },[])

    const handleSearch = async () => {
        if(search){
            const exerciseData = await fetchData(
              "https://exercisedb.p.rapidapi.com/exercises",exerciseOptions
            );

           const searchedExercises = exerciseData.filter(
             (exercise) =>
               exercise.name.toLowerCase().includes(search) ||
               exercise.target.toLowerCase().includes(search) ||
               exercise.equipment.toLowerCase().includes(search) ||
               exercise.bodyPart.toLowerCase().includes(search)
           );

           setSearch('')
           setExercises(searchedExercises);
        }

    }
 

    return (
        <Stack alignItems="center" mt='37px' justifyContent="center" p="20px">
            <Typography fontWeight="600" fontSize='44px' xs={{fontSize:{lg:'44px',xs:'30px'}}} mb="50px" textAlign="center">
                Awsome Exercises You<br/> Know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField sx={{
                    input:{fontWeight:'700',
                   border:'none',
                   borderRadius:'4px'
                },
                width:{lg:'800px', xs:'350px'},
              
                backgroundColor:'#fff',
                borderRadius:'40px'

                }} height="76px"
                 value={search} 
                 onChange={(e) => setSearch(e.target.value.toLowerCase())}
                 placeholder="Search Exercises"
                />
                <Button className='search-btn' sx={{bgcolor:'#FF2625',
                 color:'#fff',
                 textTransform:'none',
                 width:{lg:'175px', xs:'80px'},
                 fontSize:{lg:'20px',xs:'14px'},
                 height:'56px',
                 position:'absolute'
            }}
            onClick={handleSearch}
            >Search</Button>

               
                

            </Box>
            <Box sx={{position:'relative',width:'100%',p:'20px'}}>
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}></HorizontalScrollbar>
            </Box>
            
        </Stack>
    );
};

export default SearchExercises;