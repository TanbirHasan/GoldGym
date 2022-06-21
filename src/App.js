import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import {Box} from "@mui/material"
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <Box width="400px" sx={{width : {xl : '1488px'}}} m='auto' >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
          <Route path="/exercise/:id" element={<ExerciseDetail/>}></Route>
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
