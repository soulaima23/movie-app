import logo from './logo.svg';
import './App.css';
import { moviedata } from './component/data';
import Filter from './component/Filter/Filter';
import MovieList from './component/MovieList/MovieList';
import AddMovie from './component/AddMovie/AddMovie';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';


function App() {
  const [Movies, setfirst] = useState(moviedata)
  const [title, settitle] = useState("")

  const handleChange = (e) =>{
  settitle(e.target.value)
  }


  return (
    <div className="App">
      <Filter handleChange={handleChange} title={title}/>
      <MovieList Movies={Movies.filter(movie=>movie.title.toUpperCase().includes(title.toUpperCase()))}/>
      <AddMovie/>
    </div>
  );
}

export default App;
