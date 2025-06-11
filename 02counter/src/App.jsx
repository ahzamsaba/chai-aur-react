import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  // let counter = 5
  const increment = () => {
    setCounter(counter+1)
  }  

  const increment4 = () => {
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
  }
//-> React batches multiple state updates together for performance reasons
// counter = 15
// setCounter(16)  // based on counter = 15
// setCounter(16)  // still based on counter = 15
// setCounter(16)  // again, based on counter = 15

// You're telling React:
// “Don't use the current value of counter from the outer scope. 
//  Instead, give me the latest updated value at the time of this update.”
//  setCounter(prevCounter => prevCounter+1)

  const decrement = () => {
    if(counter>0) counter -= 1
    setCounter(counter)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={increment}>Increment {counter}</button>
      <button onClick={increment4}>Increment 4 times {counter}</button>
      <br />
      <button onClick={decrement}>Decrement {counter} </button>
      <p>footer : {counter} </p>
    </>
  )
}

export default App

// React takesover for updation in UI
// useState -> basic Hook