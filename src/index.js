import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import StarRating from './StarRating';


function TestStars(){
  const [movieRating,setMovieRating]=useState(0);
  const [msg,setMsg]=useState('');

  return(
    <div>
      <StarRating maxRating={5} color='teal' size={64}
      messages={['terrible','one time Watch','ok ok','mast','Baap Movie']}
       onSetRate={setMovieRating} onSetMsg={setMsg}/>
      <p>{movieRating===0?`Un-rated`:`This movie was rated ${movieRating} stars 
      and critics called it as ${msg}`}</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating/>
    <StarRating maxRating={5} 
    messages={['terrible','one time Watch','ok ok','mast','Baap Movie']}/>
    <StarRating maxRating={5} size={24} color='red'/>
    <TestStars/>
    
  </React.StrictMode>
);


