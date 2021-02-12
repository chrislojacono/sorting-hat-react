import React, { useState } from 'react';
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from 'reactstrap';

export default function InputComponent() {
  const [userInput, setUserInput] = useState('');
  const [randomHouse, setRandomHouse] = useState(null);

  const randomHouseGenerator = () => {
    const houses = ['slytherin', 'gryffindor', 'hufflepuff', 'ravenclaw'];
    const chosenHouse = houses[Math.floor(Math.random() * houses.length)];
    setRandomHouse(chosenHouse);
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    randomHouseGenerator();
  };

  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType='append'>
          <Button onClick={handleSubmit}>Sort!</Button>
        </InputGroupAddon>
        <Input
          type='text'
          name='searchInput'
          value={userInput}
          onChange={handleChange}
          placeholder='Input your name!'
          className='form-control form-control-lg m-1'
          required
        />
      </InputGroup>
    </div>
  );
}
