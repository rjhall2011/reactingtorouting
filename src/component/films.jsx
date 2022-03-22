import React, { useState, useEffect} from "react";
import FilmsCard from './filmsCard';



const Films = () => {
  
    const [films, setFilms] = useState([]);


    useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(result => result.json())
      .then(data => setFilms(data))
      .catch(err => console.log(err))
      
    }, [])

  
    return (
      < >
        {this.state.films.map(films => <FilmsCard key={films.id} value={films} />)}
      </ >
    );
  
}

export default Films;