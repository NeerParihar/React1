import logo from './logo.svg';
import './App.css';
import store from './Store';
import { useState } from 'react';
import { square,cube } from './Scalculator';
const App=()=>{
store.subscribe(()=>{console.log(store.getState())});
let [st,updateSt]= useState(store.getState());

  return(<>
  <h1> {st} App Component is running</h1>
  <button onClick={()=>{
    store.dispatch(square())
    updateSt(store.getState())
  }}>Sqaure</button>
   <button onClick={()=>{
    store.dispatch(cube())
    updateSt(store.getState())
  }}>Cube</button>
 
  <input type='number' value={st}/>

  </>)
}

export default App;
