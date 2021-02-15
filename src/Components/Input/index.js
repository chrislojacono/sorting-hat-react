import React, { useState } from 'react';
import {
  InputGroup,
  Alert,
} from 'reactstrap';
import Card from '../Card';

export default function InputComponent() {
  const [userInput, setUserInput] = useState('');
  const [randomHouse, setRandomHouse] = useState(null);
  const [studentArray, setStudentArray] = useState([]);
  const [studentUID, setStudentUID] = useState(0);
  const [errorMessage, setErrorMessage] = useState(false);

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
    randomHouseGenerator().then(() => {
      randomIdGenerator().then(() => {
        console.warn('success');
      });
    });
  };

  const handleSubmit = (e) => {
    if (userInput !== '') {
      const studentObject = {
        name: userInput,
        house: randomHouse,
        id: studentUID,
      };
      setStudentArray(studentArray.concat(studentObject));
    } else {
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 3000);
    }
  };

  return (
    <div>
      {errorMessage === true ? <Alert color="danger">
        Please enter your name before sorting!
      </Alert> : '' }
      <InputGroup className="inputDiv">
        <input
          type='text'
          name='userInput'
          value={userInput}
          onChange={handleChange}
          placeholder='Input your name!'
          className='form-control form-control-lg m-1'
          required
        />
        <button className='btn btn-outline-success' onClick={handleSubmit}>Sort!</button>
      </InputGroup>
      <div className='d-flex justify-content-center'>
        {studentArray.map((item) => (
          <Card key={item.id} inputName={item.name} randomHouse={item.house} id={item.id}/>
        ))}
      </div>
    </div>
  );
}
