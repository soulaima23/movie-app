import logo from './logo.svg';
import './App.css';
import { moviedata } from './component/data';
import Filter from './component/Filter/Filter';
import MovieList from './component/MovieList/MovieList';
import AddMovie from './component/AddMovie/AddMovie';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Description from './component/Description';
 

function App() {
  const [Movies, setfirst] = useState(moviedata)
  const [title, settitle] = useState("")

  const handleChange = (e) =>{
  settitle(e.target.value)
  }


  return (
    <div className="container">
      <Filter handleChange={handleChange} title={title}/>
      <BrowserRouter>
       
      <Routes>
      <Route path='/' element={ <MovieList Movies={Movies.filter(movie=>movie.title.toUpperCase().includes(title.toUpperCase()))}/>}/>
     
     <Route path='/' element={<AddMovie/>}/>
      
      
      <Route  path='/Description/:id'  element={ <Description Movies={Movies}/> }/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
