import React, { useState, useMemo, useCallback } from 'react';
import './App.css';

// Why does border still render?
const Border = React.memo(({ children }) => {
  console.log('Border rendered');
  return <div className="border">{children}</div>;
});

const Header = React.memo(({ text }) => {
  console.log('Header rendered');
  return <h1>{text}</h1>;
});

const Button = React.memo(({ color, onClick }) => {
  console.log('Button rendered');

  return (
    <button style={{ background: color }} onClick={onClick}>
      I change the text
    </button>
  );
});

const App = () => {
  console.log('App rendered');

  const [text, setText] = useState('Hello World');
  const [color, setColor] = useState('red');
  const oppositeColor = useMemo(
    () => (color === 'red' ? 'blue' : 'red'),
    [color]
  );

  // Notice the use of prevText
  const changeText = useCallback(() => {
    setText((prevText) =>
      prevText === 'Hello World' ? 'Goodbye World' : 'Hello World'
    );
  }, []);

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
