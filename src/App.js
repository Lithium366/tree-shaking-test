import React from 'react';
import './App.css';
import {
  Button,
  TextField,
  Text,
  Carousel,
  Icon,
  Black,
  White,
  Yellow,
  Bottle36
} from '@grxfrontend/good-ui';

function App() {
  return (
    <div className="App">
      <Button>I am a button</Button>
      <br />
      <Text>I am a text</Text>
      <br />
      <TextField placeholder="I am a TextField" />
      <br />
      <Carousel slides={[<Black />, <Yellow />, <White />]} />
      <div>
        Icons: <br />
        <Icon>
          <Bottle36 />
        </Icon>
      </div>
    </div>
  );
}

export default App;
