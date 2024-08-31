import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Component/Register';
import Home from './Component/Home';
import Important from './Component/Important';

function App() {

  const [list, setList] = useState([])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Home list={list} setList={setList} />}/>
        <Route path="/important"  element={<Important list={list} />} />
      </Routes>
    </Router>
  );
}

export default App;
