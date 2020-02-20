import React from 'react';

import './App.css';


import List from "./components/List"
import Axios from 'axios';





function App() {
  Axios
  .get("https://cat-fact.herokuapp.com/facts/random")
  .then ((response)=>{
    console.log(response)
  })

  return (
   
    <div className="App">
      
      <List/>
    </div>
   
  );
}

export default App;
