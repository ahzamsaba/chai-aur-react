import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length,setLength] = useState(8)
  const [numAllowed,setNumAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numAllowed) str += "0123456789"

    if (charAllowed) str += "~`!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";

    for(let i=1;i<=length;i++){
      let str_i = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(str_i)

    }

    setPassword(pass)

  } , [length,numAllowed,charAllowed,setPassword])//if any dependency changes react optimizes method

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,max)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  } , [length,numAllowed,charAllowed,passwordGenerator])//if any dependency changes react runs useEffect again

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3 font-semibold'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='passsword'
          readOnly
          ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard} 
          className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 hover:bg-blue-700 active:scale-105 transition transform duration-100'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={5}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={ (e) => {setLength(e.target.value)} }
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numAllowed}
            id='numberInput'
            onChange={ () => {
              setNumAllowed(prev => !prev)
            } }
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id='charInput'
            onChange={ () => {
              setCharAllowed(prev => !prev)
            } }
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
