import { useState } from "react"

function App() {
  const [color,setColor] = useState("olive")
  const colors = ["red", "green", "blue", "black", "indigo", "magenta", "lavender", "yellow","aliceblue","orange"]

  return (
    <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-2xl px-3 py-2">
          {colors.map((c) => (
          <button
          key={c}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: c}}
          onClick={() => setColor(c)}
          >{c.charAt(0).toUpperCase() + c.slice(1)}</button>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default App
