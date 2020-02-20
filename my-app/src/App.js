import React from 'react';

import './App.css';


import List from "./components/List"
import Axios from 'axios';

import styled from "styled-components"


const Header =styled.h1`
font-family: Georgia, serif;
font-size: 50px;
letter-spacing: 2px;
word-spacing: 2px;
color: #000000;
font-weight: normal;
text-decoration: none;
font-style: normal;
font-variant: normal;
text-transform: none;
background-color:black;
color:white;

`


function App() {
  Axios
  .get("https://cat-fact.herokuapp.com/facts/random")
  .then ((response)=>{
    console.log(response)
  })

  return (
   
    <div className="App">
        <Header>THE ULTIMATE(kidding)SPECIES(dogs are better)</Header>
      <List/>
    </div>
   
  );
}

export default App;
