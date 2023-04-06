import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Greeting from './Greeting';
import { fetchGreetings } from '../redux/greetings/greetingSlice';

function App() {
  const dispatch = useDispatch();

  dispatch(fetchGreetings());

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
