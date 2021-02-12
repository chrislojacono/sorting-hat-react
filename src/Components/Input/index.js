import React, { useState } from 'react';
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from 'reactstrap';
// import CardContainer from '../CardContainer';
import Card from '../Card';

export default function InputComponent() {
  const [userInput, setUserInput] = useState('');
  const [randomHouse, setRandomHouse] = useState(null);
  const [studentArray, setStudentArray] = useState([]);

  const randomHouseGenerator = () => new Promise((resolve, reject) => {
    const houses = ['slytherin', 'gryffindor', 'hufflepuff', 'ravenclaw'];
    const chosenHouse = houses[Math.floor(Math.random() * houses.length)];
    resolve(setRandomHouse(chosenHouse)).catch((error) => reject(error));
  });

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    randomHouseGenerator();
    const studentObject = {
      name: userInput,
      house: randomHouse,
    };
    setStudentArray(studentArray.concat(studentObject));
  };

  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType='append'>
          <Button onClick={handleSubmit}>Sort!</Button>
        </InputGroupAddon>
        <Input
          type='text'
          name='userInput'
          value={userInput}
          onChange={handleChange}
          placeholder='Input your name!'
          className='form-control form-control-lg m-1'
          required
        />
      </InputGroup>
      <div className='d-flex justify-content-center'>
        {studentArray.map((item) => (
          <Card inputName={item.name} randomHouse={item.house} />
        ))}
      </div>
    </div>
  );
}
