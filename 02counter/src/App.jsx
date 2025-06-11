import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  // let counter = 5
  const increment = () => {
    counter += 1
    setCounter(counter)
    console.log(counter)
  }

  const decrement = () => {
    if(counter>0) counter -= 1
    setCounter(counter)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={increment}>Increment {counter}</button>
      <br />
      <button onClick={decrement}>Decrement {counter} </button>
      <p>footer : {counter} </p>
    </>
  )
}

export default App

// React takesover for updation in UI
// useState -> basic Hook