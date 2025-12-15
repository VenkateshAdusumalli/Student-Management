import './App.css'
import React from 'react';
import Form from './Form.jsx';
import Nav from './nav.jsx';
import Record from './records.jsx';
import {Routes, Route, Navigate } from 'react-router-dom';

function App(){
  return(
    <div>
      <Nav />
        <Routes>
          <Route path='/dashboard' />
          <Route path="/registration" element={<Form />} />
          <Route path="/records" element={<Record />} />
        </Routes>
    </div>
  )
}
 

export default App;
