import React from 'react';
import Person from './Person/Person';

// if only returning one thing, 
// you can omit return statement
// and just put () instead of {} (part of es6)
const persons = (props) => props.persons.map((person, index) => {
        return <Person
            click={() => props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => props.changed(event, person.id)}
          />      
      });

export default persons;