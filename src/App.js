import logo from './logo.svg';
import React from 'react'
import './App.css';
import { Weather } from './components/Weather';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
const [input,setInput] = React.useState('')
const  [city,setCity] = React.useState('')

const changeHandler = (e) => {
  setInput(e.target.value)
}

const submitHandler = (e) => {
  e.preventDefault();
  setCity(input);
}


  return (
    <div className="App">
     
     <div className='forms'>
     <form className='formSubmit'style={{width:'270px'}} onSubmit={submitHandler}>
      <input
          className='form-control'
         placeholder='city name :' 
         value={input} 
         onChange={changeHandler}
         />
         <button className='btn btn-primary' type='submit'>SUBMIT</button>

       
      </form>
     </div>
      
      
     
      {city && <Weather name={city}/>}
    </div>
  );
}

export default App;
