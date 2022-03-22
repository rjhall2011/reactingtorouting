import React, { useState, useEffect} from "react";
import {} from 'react-router-dom';


const Person = () => {
   
    const [person, setPerson] = useState([]);


    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/people/" + this.props.match.params.id)
        .then(result => result.json())
        .then(data => setPerson(data))
        .catch(err => console.log(err))
    },[])
 
  return (
    <div className='d-flex justify-content-center mt-3'>
 <table className="table table-bordered w-50 formColor tableBorder">
  <thead>
    <tr>
      <th colSpan='2' className='text-center'><h2>{this.state.person.name}</h2></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Gender</th>
      <td>{this.state.person.gender}</td>
    </tr>
    <tr>
      <th scope="row">age</th>
      <td>{this.state.person.age}</td>
    </tr>
    <tr>
      <th scope="row">Eye Color</th>
      <td>{this.state.person.eye_color}</td>
    </tr>
    <tr>
      <th scope="row">Hair Color</th>
      <td>{this.state.person.hair_color}</td>
    </tr>
  </tbody>
 </table></div>
  );

}


export default Person;