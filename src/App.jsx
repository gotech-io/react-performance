import React, { useState } from 'react';
import './App.css';

const Border = ({ children }) => {
  console.log('Border rendered');
  return <div className="border">{children}</div>;
};

const Header = ({ text }) => {
  console.log('Header rendered');
  return <h1>{text}</h1>;
};

const Button = ({ color, onClick }) => {
  console.log('Button rendered');

  return (
    <button style={{ background: color }} onClick={onClick}>
      I change the text
    </button>
  );
};

const App = () => {
  console.log('App rendered');

  const [text, setText] = useState('Hello World');
  const [color, setColor] = useState('red');
  const oppositeColor = color === 'red' ? 'blue' : 'red';

  const changeText = () => {
    setText(text === 'Hello World' ? 'Goodbye World' : 'Hello World');
  };

  return (
    <div className="App">
      <Header text={text} />
      <Button color={color} onClick={changeText} />
      <Border>
        <Button color={oppositeColor} onClick={changeText} />
      </Border>
    </div>
  );
};

export default App;
