import React, { useState } from 'react';
import {
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
    e.preventDefault();
    if (userInput !== '') {
      const studentObject = {
        name: userInput,
        house: randomHouse,
        id: studentUID,
      };
      setUserInput('');
      setStudentArray(studentArray.concat(studentObject));
    } else {
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 3000);
    }
  };

  const expelStudent = (id) => {
    const nonExpelledStudents = studentArray.filter((student) => student.id !== id);
    setStudentArray(nonExpelledStudents);
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <div>
      {errorMessage === true ? <Alert color="danger">
        Please enter your name before sorting!
      </Alert> : '' }
      <form className="inputDiv">
        <input
          type='text'
          name='userInput'
          value={userInput}
          onChange={handleChange}
          placeholder='Input your name!'
          onKeyPress={handleKeypress}
          className='form-control form-control-lg m-1'
          required
        />
        <button type="submit" className='btn btn-outline-success' onClick={handleSubmit}>Sort!</button>
      </form>
      <div className='d-flex justify-content-center'>
        {studentArray.map((item) => (
          <Card key={item.id} inputName={item.name} randomHouse={item.house} id={item.id} expelStudent={expelStudent}/>
        ))}
      </div>
    </div>
  );
}
