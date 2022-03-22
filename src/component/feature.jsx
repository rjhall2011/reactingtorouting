import React, { useState, useEffect} from "react";
import {} from 'react-router-dom';



const Feature = () => {
    
    const [feature, setFeature] = useState([]);


    useEffect(() => {
      fetch("https://ghibliapi.herokuapp.com/films/" + this.props.match.params.id)
        .then(result => result.json())
        .then(data => setFeature(data))
        .catch(err => console.log(err))
        }, [])
    

  return (
      <div className='d-flex justify-content-center mt-3'>
 <table className="table table-bordered w-50 formColor tableBorder">
  <thead>
    <tr>
      <th colSpan='2' className='text-center'><h2>{this.state.films.title}</h2></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Description</th>
      <td>{this.state.films.description}</td>
    </tr>
    <tr>
      <th scope="row">Director</th>
      <td>{this.state.films.director}</td>
    </tr>
    <tr>
      <th scope="row">Producer</th>
      <td>{this.state.films.producer}</td>
    </tr>
    <tr>
      <th scope="row">Release Date</th>
      <td>{this.state.films.release_date}</td>
    </tr>
    <tr>
      <th scope="row">Rating</th>
      <td>{this.state.films.rt_score}</td>
    </tr>
  </tbody>
</table></div>
  );
}



export default Feature;