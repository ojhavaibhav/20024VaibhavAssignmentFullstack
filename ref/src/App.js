import React from 'react';
import logo from './logo.svg';
import './App.css';
import Childref from './Components/Childref';
import Refdemo from  './Components/Refdemo';
import Navbar from "./Components/Navbar";
import Parent from './Components/Parent';
import bands from "./bands.json";
import Rating from "./Components/Rating";
function App() {
  const ref = React.createRef();
  const [likedBands, updateLikedBands] = React.useState([]);
  function funinparent()
  {
      alert(ref.current.value+"......from")


  }
  console.log(likedBands)
  return (
    <div className="App">
      
  {/* <Childref ref={ref} children="Click me"/>
  <Functionalrefdemo ref = {ref}/>
  <Refdemo ref = {ref}/>
  <button onClick={funinparent}>click on parent</button>
  <Navbar/> */}
  <Parent/>



  
    </div>
  );
}

export default App;
