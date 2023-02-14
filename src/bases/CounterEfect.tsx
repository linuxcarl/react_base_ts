import {gsap} from "gsap";
import { useState, useEffect } from "react";
const MAXIMUN_COUNT = 10;
export const CounterEfect = () => {
  const [counter, setCounter] = useState(5);

  const HandlerCounter = () => {
    setCounter((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };
  useEffect(() => {
    if(counter<10) return ;
    console.log('%cSe llego al valor maximo', 'color: red; font-size: 20px;')
    gsap.to('h2',{ color: 'red', duration: 0.2, ease: 'ease.out', y:-15}).then(()=>{
      gsap.to('h2',{ color: 'white', duration: 0.3, ease: 'bounce.out', y:0})
    })
  }, [counter])
  
  return (
    <>
      <h1>Counter Efect: </h1>
      <h2>{counter}</h2>
      <button onClick={HandlerCounter}>+1</button>
    </>
  );
};
