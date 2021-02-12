import React, { useState } from 'react';
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from 'reactstrap';
import Card from '../Card';

export default function InputComponent() {
  const [userInput, setUserInput] = useState('');
  const [randomHouse, setRandomHouse] = useState(null);
  const [studentArray, setStudentArray] = useState([]);
  const [studentUID, setStudentUID] = useState(0);

  const randomHouseGenerator = () => new Promise((resolve, reject) => {
    const houses = ['slytherin', 'gryffindor', 'hufflepuff', 'ravenclaw'];
    const chosenHouse = houses[Math.floor(Math.random() * houses.length)];
    resolve(setRandomHouse(chosenHouse)).catch((error) => reject(error));
  });

  const randomIdGenerator = () => new Promise((resolve, reject) => {
    const UID = [Math.floor(Math.random() * 10000)];
    resolve(setStudentUID(UID)).catch((error) => reject(error));
  });

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    randomHouseGenerator().then(() => {
      randomIdGenerator().then(() => {
        const studentObject = {
          name: userInput,
          house: randomHouse,
          id: studentUID,
        };
        setStudentArray(studentArray.concat(studentObject));
      });
    });
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
          <Card key={item.id} inputName={item.name} randomHouse={item.house} />
        ))}
      </div>
    </div>
  );
}
