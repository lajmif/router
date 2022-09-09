import './App.css';
import React from 'react';
import First from'./Comp/First'
import { Routes,Route } from 'react-router-dom';
import Second from './Comp/Second';

const App = () =>{

   const cars= [
    {
      id: Math.random(),
      task: "cars 1 ",
      price: "2000",
    },
    {
      id: Math.random(),
      task: "cars 2 ",
      price: "1300",
    },
    {
      id: Math.random(),
      task: "cars 3 ",
      price: "3100",
    },
   ];

   return (
   <div>
    <Routes>
      <Route path="/" element ={<First/>}/>
      <Route path="/second" element ={<Second/>}/>
    </Routes>
   </div>);
};

export default App;
