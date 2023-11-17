
import './App.css';
import hole from './assets/hole.png'
import mole from './assets/mole.png'
import {useEffect, useState} from "react";


function App() {
  const [ score, setScore ] = useState(0);
  const  [ moles , setMoles ] = useState( new Array(9).fill(false));


  function setMoleVisibility (idx, isVisible){
    setMoles((curMoles) => {
      const newMoles = [...curMoles];
      newMoles[idx] = isVisible;
      return newMoles;
    });
  }

  function wackMole(idx){
    if(!moles[idx]) return;
    setMoleVisibility(idx,false);
    setScore((score) => score + 1);

  }

  useEffect(()=>{
    const interval = setInterval(()=>{
      const randomIndex = Math.floor(Math.random() * moles.length);
      setMoleVisibility(randomIndex, true);
      const newMoles = [...moles];
      newMoles[randomIndex] = true;
      setMoles(newMoles);
      setTimeout(()=>{
        setMoleVisibility(randomIndex,false)
      },700)
    },1000);

    return () =>{
      clearInterval(interval);
    }
  },[moles]);



  return (
      <>
        <h1>Score: {score}</h1>
        <div className="grid">
            {moles.map((isMole, idx) =>{
               return <img
                   key={idx}
                   src={isMole ? mole : hole}
                   onClick={()=>{
                   wackMole(idx);
               }}
               />
            })}
        </div>
      </>
  );
}

export default App;
