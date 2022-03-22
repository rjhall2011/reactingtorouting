import React, { useState, useEffect} from "react";
import PeopleCard from './peopleCard';

const People = () => {
  
    const [people, setPeople] = useState([]);


    useEffect(() => {
      fetch("https://ghibliapi.herokuapp.com/people")
      .then(result => result.json())
      .then(data => setPeople(data))
      .catch(err => console.log(err))
    },[])

  
    return (
      < >
        {this.state.people.map(people => <PeopleCard key={people.id} value={people} />)}
      </ >
    );
  
}

export default People;