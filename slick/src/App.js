import logo from './logo.svg';
import './App.css';
import { imagedata } from './Data';
import React,{useState,useEffect} from "react"
function App() {
  const[counter,setCounter]=useState(0)
  const[pause,setPause]=useState(false)
useEffect(()=>{
  if(!pause){const time= setInterval(()=>{if(counter>=imagedata.length-1)
    {setCounter(0)}
      else setCounter(counter+1)},2000);
      return  ()=>clearInterval(time)}
 
},[counter,pause])
let handlePrev=()=>{
  if(counter<=0){setCounter(imagedata.length-1)}
 else setCounter(counter-1)
}
let handleNext=()=>{
 
 if(counter>=imagedata.length-1)
 {setCounter(0)}
   else setCounter(counter+1)
  console.log(counter)
}

  return (
    <div className="App">
      <button onClick={handlePrev}>prev</button>
<img src={imagedata[counter].image} onMouseEnter={()=>setPause(true)} onMouseOut={()=>setPause(false)}/>
     <button onClick={handleNext}>nexr</button>
     <div className="imag">
      {
        imagedata.map((image)=>{
        return  <img src={image.image} onClick={()=>setCounter(image.id-1)} alt="imag"/>
        })
      }
       
     </div>
    </div>
  );
}

export default App;
